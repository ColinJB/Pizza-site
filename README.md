# _Paradise Pizza_

#### _Web application for ordering pizzas, 03/07/2017_

#### By _**Colin Bloom (github/ColinJB)**_

## Description

_This application creates a new order for each customer. Customers can then create pizzas by choosing size and toppings; as well as choose delivery or pick-up. They cannot add a pizza without filling out all fields. Submitting the order will display their information, with information about their order; such as price, type and quantity_

## Setup/Installation Requirements.

* _Clone repo from GitHub_
* _Open in text editor/web browser_

## No known Bugs

## Support and contact details

_Please reach out if you have any ideas to contribute or critiques to convey! colinjbloom113@gmail.com_

## Technologies Used

_HTML_
_CSS_
_JavaScript_
_jQuery_

## Specifications

## Specifications
 +|Behavior|Input|Output|
 +|-----|-----|-----|
 +|Creates new Order(object) w/ properties for [name, address, type,pizzas,total]|new Object;|Object (name,address,type,pizzas,total)|
 +|Creates new Pizza(object) w/ properties for[size, meatToppings, otherToppings, price]|new Pizza;|Pizza (size,meatToppings,otherToppings,price)|
 +|Adds new pizzas to existing order.|newOrder.pizzas.push(newPizza);|newOrder.pizzas = [1];|
 +|Calculates total price per pizza.|newOrder.total;|(sizeCost + toppingsCost)|
 +|Calculates total order cost.|newOrder.total;|(price per pizza + possibly delivery charge)|

### License

*GPL*

Copyright (c) 2017 **_Colin Bloom_**
