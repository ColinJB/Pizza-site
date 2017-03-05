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


//pizza price calculation
Pizza.prototype.setBasePrice = function() {
  if (this.size === "large") {
    this.price += 18;
  } else if (this.size === "medium") {
    this.price += 15;
  } else if (this.size == "small") {
    this.price += 13;
  }
}
// bUG!!!!!
Pizza.prototype.meatToppingsCost = function() {
  if (this.meatToppings.length < 1) {
    this.price = 0;
  } else {
    this.price += this.meatToppings.length * 1.5;
  }
}
// bUG!!!!!
Pizza.prototype.otherToppingsCost = function() {
  if (this.otherToppings.length < 1) {
    this.price = 0;
  } else {
    this.price += this.otherToppings.length * 0.75;
  }
}

Pizza.prototype.setPrice = function() {
  this.setBasePrice();
  this.meatToppingsCost();
  this.otherToppingsCost();
}

Pizza.prototype.getPrice = function() {
  return this.price;
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
  for(var i = 0; i < this.pizzas.length; i++) {
    this.total += this.pizzas[i].getPrice();
  }
  if (this.type === "delivery") {
    this.total += deliveryCharge;
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

    newPizza.setPrice();

    console.log(newPizza);

    var newOrder = new Order();
    newOrder.name = $("input#name").val();
    newOrder.address = $("input#address").val();
    newOrder.type = $("#type").val();

    newOrder.pizzas.push(newPizza);
    newOrder.orderTotal();

    console.log(newOrder.orderDetails());
    $("#orderSummary").text(newOrder.orderDetails());
  });
});
