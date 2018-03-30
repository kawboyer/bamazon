# The Bamazon mySQL app <br />
The Bamazon app is an Amazon-like storefront. The app uses _**mySQL**_ to take in orders from customers and deplete stock from the store's inventory. The store is populated with ten mock data products (inspired by a search on silly products sold online). 

## A description of how the app works: <br />

1. The app displays _**a table**_ with all of the items available for sale, including item id's, product names department names and prices. <br />

2. Secondly, the app prompts the users to answer two questions: <br />
* What is the ID of the product that you would like to buy?
* How many units of the product would you like to buy? <br />

3. The app repeats back the user input, and informs the current stock quantity of the requested item id. <br />

4. Lastly, if the store has enough of the product to meet the customer's request, it will _**update the SQL database**_ to reflect the remaining quantity, and show the customer the total cost of their purchase. <br />

5. However, if the store does not have enough of the product to meet the customers request, the purchase will not go through.

## The app uses the following npm packages: <br />
* _**mySQL**_
* _**inquirer**_
* _**cli-table**_

## Screenshots illustrating the functionality of the app:

![](/images/1-userInputPositive.png) <br />
_Screenshot illustrating the table and user input (points 1 and 2)._ <br />

![](/images/2-responsePositive.png) <br />
_Screenshot illustrating the response if the item is in stock (points 3 and 4)._ <br />

![](/images/3-userInputNegative.png) <br />
_Screenshot illustrating the table and user input (points 1 and 2)._ <br />

![](/images/4-responseNegative.png) <br />
_Screenshot illustrating the response if the item is NOT in stock (3 and 5)._ <br />




