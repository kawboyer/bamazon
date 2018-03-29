DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price)
VALUES ();

INSERT INTO products (product_name, department_name, price)
VALUES ();

INSERT INTO products (product_name, department_name, price)
VALUES ();

INSERT INTO products (product_name, department_name, price)
VALUES ();

INSERT INTO products (product_name, department_name, price)
VALUES ();

INSERT INTO products (product_name, department_name, price)
VALUES ();

INSERT INTO products (product_name, department_name, price)
VALUES ();

INSERT INTO products (product_name, department_name, price)
VALUES ();

INSERT INTO products (product_name, department_name, price)
VALUES ();

INSERT INTO products (product_name, department_name, price)
VALUES ();

