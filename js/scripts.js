//business logic
function Order(name, address, type, pizzas, total) {
  this.name = name;
  this.address = address;
  this.type = type;
  this.pizzas = [];
  this.total = 0;
}

function Pizza(size, meatToppings, otherToppings) {
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
// bUG!!!!!
Pizza.prototype.meatToppingsCost = function() {
  if (this.meatToppings.length < 1) {
    meatToppingsPrice = 0;
  } else {
    meatToppingsPrice = this.meatToppings.lenth * 1.5;
  }
}
// bUG!!!!!
Pizza.prototype.otherToppingsCost = function() {
  if (this.otherToppings.length < 1) {
    otherToppingsPrice = 0;
  } else {
    otherToppingsPrice = this.otherToppings.lenth * 0.75;
  }
}

Pizza.prototype.pizzaPrice = function() {
  this.price = (basePrice + meatToppingsPrice + otherToppingsPrice);
}

//return order details
Order.prototype.orderDetails = function(details) {
  if (this.type === "delivery") {
    return (this.name + ", Delivery to " + this.address);
  } else {
    return (this.name + ", Pick-up order");
  }
}

Order.prototype.orderTotal = function() {
  if (this.type === "delivery") {
    this.pizzas.forEach(function(pizza) {
      this.total += pizza.pizzaPrice();
    });
    this.total += deliveryCharge;
  } else {
    this.pizzas.forEach(function(pizza) {
      this.total += pizza.pizzaPrice();
    });
  }
}

Order.prototype.addPizza = function() {
  this.pizzas.push(newPizza);
}
//user interface logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    debugger;

    var newPizza = new Pizza();

    newPizza.size = $("#size").val();

    $("input:checkbox[name=meatToppings]:checked").each(function() {
      newPizza.meatToppings.push($(this).val());
    });

    $("input:checkbox[name=otherToppings]:checked").each(function() {
      newPizza.otherToppings.push($(this).val());
    });



    console.log(newPizza);
    console.log(newPizza.meatToppingsCost());
    console.log(newPizza.otherToppingsCost());
    newPizza.pizzaPrice();
    console.log(newPizza.pizzaPrice());

    var newOrder = new Order();
    newOrder.name = $("input#name").val();
    newOrder.address = $("input#address").val();
    newOrder.type = $("#type").val();

    newOrder.pizzas.push(newPizza);


    console.log(newOrder.orderDetails());
    console.log(newOrder.orderTotal());
    $("#orderSummary").text(newOrder.orderDetails());
  });
});
