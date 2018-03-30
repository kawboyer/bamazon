var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  user: "root",

  password: "root",
  database: "bamazon_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  displayItems();
  console.log("Connected as id: " + connection.threadId + "\n");
  console.log("");
  console.log("======================================== THE BAMAZON PRODUCT SELECTION ========================================");
  console.log("");
});

function displayItems() {
  var query = connection.query("SELECT * FROM bamazon_DB.products", function (err, res) {
    if (err) throw err;
    // console.log(res);

    var table = new Table({
      head: ["ITEM ID", "PRODUCT NAME", "DEPARTMENT NAME", "PRICE"],
      colWidths: [10, 50, 35, 12]
    });

    for (var i = 0; i < res.length; i++) {
      table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price]);
    }
    console.log(table.toString());
    console.log("");
    console.log("Please answer the questions below, so we can determine if the requested item is in stock on Bamazon.");
    console.log("");
    console.log("---------------------------------------------------------------------------------------------------------------");
    console.log("");
    start();
  });
}

function start() {
  inquirer
    .prompt([{
      name: "id",
      message: "What is the ID of the product that you would like to buy?",
      type: "input",
      // Make sure the user input is a integer less than 10
      validate: function(value) {
        if (isNaN(value) === false && value <= 10) {
          return true;
        }
        return false;
      }
    },
    {
      name: "units",
      message: "How many units of the product would you like to buy?",
      type: "input",
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    }]).then(function (answer) {
      console.log("");
      console.log("---------------------------------------------------------------------------------------------------------------");
      console.log("");
      console.log("You requested " + answer.units + " units of item id " + answer.id + ".")
      console.log("");
        
      var query="SELECT * FROM products WHERE ?"
      connection.query(query, {item_id:answer.id}, function(err, res){
        // console.log(res);
        console.log("Currently the stock quantity of item id " + answer.id + " is: " + res[0].stock_quantity);
        console.log("");
        console.log("Your total is $" + (parseInt(answer.units) * res[0].price));

        if (answer.units <= res[0].stock_quantity) {
          var updateQuery = ("UPDATE products SET stock_quantity =" + (res[0].stock_quantity - answer.units) + " WHERE item_id = " + answer.id);
          connection.query(updateQuery, {item_id:answer.id}, function(err, res) {

          //console.log("Your total is " + (parseInt(answer.units) * res[0].price));
          console.log(""); 
          console.log("Thanks for shopping with us!");
          console.log("");
          console.log("---------------------------------------------------------------------------------------------------------------");
          });
        }
        else if (answer.units > res[0].stock_quantity) {
          console.log(""); 
          console.log("Sorry! We do not have enough in stock right now. Please check back later.");
          console.log("");
          console.log("---------------------------------------------------------------------------------------------------------------");
        }
      });
    });
};