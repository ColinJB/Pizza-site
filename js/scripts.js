//business logic
function Order(name, address, type, number, pizzas, total) {
  this.name = name;
  this.address = address;
  this.number = number;
  this.type = type;
  this.pizzas = [];
  this.total = 0;
}

function Pizza(size, meatToppings, otherToppings, price) {
  this.size = size;
  this.meatToppings = [];
  this.otherToppings = [];
  this.price = 0;
}
var deliveryCharge = 4;
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

Pizza.prototype.pizzaPrice = function() {
  return this.price = (basePrice + meatToppingsPrice + otherToppingsPrice);
}

//return order details
Order.prototype.orderDetails = function(details) {
  if (this.type === delivery) {
    return (this.name + ", Order #" + this.number + "<br>" + "Delivery to " + this.address);
  } else {
    return (this.name + ", Order #" + this.number + "<br>" + "Pick-up order");
  }
}

Order.prototype.orderTotal = function() {
  if (this.type === delivery) {
    this.pizzas.forEach(function(pizza) {
      this.total += pizza.pizzaPrice();
    });
    return this.total += deliveryCharge;
  } else {
    return this.pizzas.forEach(function(pizza) {
      this.total += pizza.pizzaPrice();
    });
  }
}





//user interface logic
// $(document).ready(function) {
//
// }
