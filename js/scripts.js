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
    this.price += this.meatToppings.length * 1.50;
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


Order.prototype.setTotal = function() {
  for(var i = 0; i < this.pizzas.length; i++) {
    this.total += this.pizzas[i].getPrice();
  }
  if (this.type === "delivery") {
    this.total += deliveryCharge;
  }
}

//return order details
Order.prototype.getName = function() {
  return this.name;
}

Order.prototype.getAddress = function() {
  return this.address;
}

Order.prototype.getType = function() {
  return this.type;
}

Order.prototype.getPizzas = function(pizza) {
  return this.pizzas.length;
}

Order.prototype.getTotal = function(details) {
  return "$" + this.total;
}

Order.prototype.addPizza = function() {
  this.pizzas.push(newPizza);
}

Order.prototype.getDetails = function(details) {
  this.getName();
  this.getAddress();
  this.getType();
  this.getPizzas();
  this.getTotal();
}

//user interface logic
$(document).ready(function() {

  $("#addPizza").click(function() {
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

    newOrder.pizzas.push(newPizza);
    newOrder.name = $("input#name").val();
    newOrder.address = $("input#address").val();
    newOrder.type = $("#type").val();

    newOrder.setTotal();

    //debugger;
    console.log(newOrder.getDetails());
    $("#orderName").text(newOrder.getName());
    $("#orderAddress").text(newOrder.getAddress());
    $("#orderType").text(newOrder.getType());
    $("#pizzaNum").text(newOrder.getPizzas());
    $("#orderTotal").text(newOrder.getTotal());
    $("#summary").show();

    $("#size").val("none");
    $('input[type=checkbox]').each(function() {
      this.checked = false;
    });


  })


  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    debugger;




  });
});
