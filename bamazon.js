var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,

    user: "root",

    password: "root",
    database: "bamazon_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer.prompt({
        name: "",
        type: "input",
        message: "What would you like to do?",
        choices: "",
    }).then(function(answer) {

    });
};