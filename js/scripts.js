//business logic
function Pizza(size, meatToppings, otherToppings) {
  this.size = size;
  this.meatToppings = [];
  this.otherToppings = [];
  this.price = 0;
}
var otherToppingsPrice = 0;
var meatToppingsPrice = 0;
var basePrice = 0;

//pizza price calculation
Pizza.prototype.getBasePrice = function() {
  if (this.size === "large") {
    basePrice = 18;
  } else if (this.size === "medium") {
    basePrice = 15;
  } else if (this.size == "small") {
    basePrice = 13;
  }
}

Pizza.prototype.meatToppingsCost = function() {
  if (this.meatToppings.length < 1) {
    meatToppingsPrice = 0;
  } else {
    meatToppingsPrice = this.meatToppings.lenth * 1.5;
  }
}

Pizza.prototype.otherToppingsCost = function() {
  if (this.otherToppings.length < 1) {
    otherToppingsPrice = 0;
  } else {
    otherToppingsPrice = this.otherToppings.lenth * 0.75;
  }
}



//user interface logic
$(document).ready(function) {

}
