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
  console.log("CONSOLE: CONNECTED!");
});

function displayItems() {
  var query = connection.query("SELECT * FROM bamazon_DB.products", function (err, res) {
    if (err) throw err;
    // console.log(res);

    var table = new Table({
      head: ["ITEM ID", "NAME", "DEPARTMENT", "PRICE"],
      colWidths: [10, 50, 35, 12]
    });

    for (var i = 0; i < res.length; i++) {
      table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price]);
    }
    console.log(table.toString());
  });

  start();
}

function start() {
  inquirer
    .prompt({
      name: "id",
      message: "What is the ID of the product that you would like to buy?",
      type: "list",
      
      /*
      // Validate input
      validate: function (input) {
        if (value.length < 10) {
          return true;
          // Declare function as asynchronous, and save the done callback
          var done = this.async();
        }
        else {
          return "Please choose an ID from the list.";
        }
      }
      */
    } /*,
    {
      name: "units",
      message: "How many units of the product would you like to buy?",
      type: "input",
    }*/
    )
    .then(function (action) {

      // Check to see if the store has enough of the product to meet the customers request.
      /*
      switch (action.answers) {
        // 
        case true:

      }
      */
     console.log("CONSOLE: INSIDE THE .THEN STATEMENT")
    });
};

// condition
