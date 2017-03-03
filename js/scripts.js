//business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
  this.price = 0;
}

var toppingPrice = 0;

Pizza.prototype.getSize = function() {
  return this.size;
}

Pizza.prototype.getToppings = function() {
  return this.toppings;
}
//pizza price calculation
Pizza.prototype.totalPrice = function() {
  if (this.size === "large") {
    this.price = 18;
    toppingPrice = 1.5;
  } else if (this.size === "medium") {
    this.price = 15;
    toppingPrice = 1:
  } else if (this.size == "small") {
    this.price = 13;
    toppingPrice = 0.75;
  }
}

}





var costOfPizzas = this.pizzas.forEach(pizza) {

}
var toppings = [];
var toppingsPrice = function(toppings) {

}



//user interface logic
$(document).ready(function) {

}
