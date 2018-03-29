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

connection.connect(function(err) {
    if (err) throw err;
    displayItems();
    console.log("connected");
});

function displayItems() {


    var query = connection.query("SELECT * FROM bamazon_DB.products", function(err, res) {
        if (err) throw err;
        console.log(res);

        
        var table = new Table({
            head: ['ITEM ID','NAME',"DEPARTMENT",'PRICE'],
            colWidths: [5,80,30,10]
        });

        
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price]);
        }
        console.log(table.toString());
    });


    // start();
}

/*
function start() {
    

    inquirer.prompt({
        name: "id",
        type: "input",
        message: "What is the ID of the product that you would like to buy?",
        choices: "",
    }).then(function(answer) {

    });
};
*/
