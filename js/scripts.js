//business logic
function Order(name, address, type) {
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
  if (this.size === "Large") {
    this.price += 18;
  } else if (this.size === "Medium") {
    this.price += 15;
  } else if (this.size == "Small") {
    this.price += 13;
  }
}

Pizza.prototype.meatToppingsCost = function() {
  if (this.meatToppings.length < 1) {
    this.price = 0;
  } else {
    this.price += this.meatToppings.length * 1.50;
  }
}

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
  var total = this.total;
  for(var i = 0; i < this.pizzas.length; i++) {
    this.total += this.pizzas[i].getPrice();
  }
  if (this.type === "Delivery") {
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

  $("form#pizzaForm").show();
  $("#addPizza").show();

    var newOrder = new Order();

  $("#addPizza").click(function() {
    if ($("input#name").val() === "" || $("input#address").val() === "" || $("#type").val() === "none" || $("#size").val() === "none" ) {
      alert("Please enter information for all fields.");
    } else {
      var newPizza = new Pizza();

      newPizza.size = $("#size").val();

      $("input:checkbox[name=meatToppings]:checked").each(function() {
        newPizza.meatToppings.push($(this).val());
      });

      $("input:checkbox[name=otherToppings]:checked").each(function() {
        newPizza.otherToppings.push($(this).val());
      });
      debugger;

      console.log(newPizza.setPrice());

      newOrder.pizzas.push(newPizza);
      newOrder.name = $("input#name").val();
      newOrder.address = $("input#address").val();
      newOrder.type = $("#type").val();
      newOrder.setTotal();

      $(".orderName").text(newOrder.getName());
      $(".orderAddress").text(newOrder.getAddress());
      $(".orderType").text(newOrder.getType());
      $(".pizzaNum").text(newOrder.getPizzas());
      $(".orderTotal").text("$" + newOrder.total.toFixed(2));
      $("#summary").fadeIn();

      console.log(newOrder.total.toFixed(2));
      $("#size").val("none");
      $('input[type=checkbox]').each(function() {
        this.checked = false;
      });
      $("#addPizza").hide();
      $("#addAnother").show();
    }
  });

  $("#addAnother").click(function() {
    if ($("input#name").val() === "" || $("input#address").val() === "" || $("#type").val() === "none" || $("#size").val() === "none" ) {
      alert("Please enter information for all fields.");
    } else {
      var newPizza = new Pizza();
      newPizza.price = 0;

      newPizza.size = $("#size").val();

      $("input:checkbox[name=meatToppings]:checked").each(function() {
        newPizza.meatToppings.push($(this).val());
      });

      $("input:checkbox[name=otherToppings]:checked").each(function() {
        newPizza.otherToppings.push($(this).val());
      });

      newPizza.setPrice();
      newOrder.pizzas.push(newPizza);
      newOrder.total = 0;
      newOrder.setTotal();

      $(".pizzaNum").text(newOrder.getPizzas());
      $(".orderTotal").text("$" + newOrder.total.toFixed(2));

      $("#size").val("none");
      $('input[type=checkbox]').each(function() {
        this.checked = false;
      });
    }
  });

  $("form#orderForm").submit(function(event) {
    event.preventDefault();

    $("form#pizzaForm").hide();
    $("#submit").hide();
    $(".leftThanks").show();

    if (newOrder.type === "Delivery") {
      $("#time").text("arrive in 20-25 mintues. If it takes longer than 30 minutes; your meal is on us!");
    } else {
      $("#time").text("be ready for pick-up in 15 minutes. See you soon!");
    }

    for(var i = 0; i < newOrder.pizzas.length; i++) {
      $("ul").append("<li>" + newOrder.pizzas[i].size + " pizza with " + newOrder.pizzas[i].meatToppings.toString() + "," +  newOrder.pizzas[i].otherToppings.toString() + ": $" + newOrder.pizzas[i].price.toFixed(2) + "</li>");
    }
    if (newOrder.type === "Delivery") {
      $("ul").append("<li>" + "Delivery charge: $4")
    }
  });
});
