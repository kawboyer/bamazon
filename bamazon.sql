DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUE (1,"Duck Carcass Press","Home & Kitchen",1999.99,200),
(2,"Uranium Ore","Industrial & Scientific",39.95,300),
(3,"Wolf Urine","Lawn & Garden",99.99,110),
(4,"The Sojourner Keyboard","Electronics",999.00,222),
(5,"The Official Banana Sticker Book","Books",7.99,123),
(6,"Banana Slicer","Home & Kitchen",2.93,200),
(7,"Bluetooth Speaker Smart Bulb","Home & Kitchen",29.95,550),
(8,"AlienTech Clue Projector","Electronics",479.00,64),
(9,"The Gurthenberg Bible","Books",3.79,12),
(10,"Giant Googly Eye Stickers","Home & Kitchen",10.79,1200)






