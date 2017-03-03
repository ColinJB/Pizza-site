//business logic
function Customer(name, zip, pizzas, discount, total, type) {
  this.name = name;
  this.zip = zip;
  this.pizzas = [];
  this.discount = discount;
  this.type = type;
  this.total = total;
}
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}
//Get
Customer.prototype.getName() {
  return this.name;
}

Customer.prototype.getZip() {
  return this.zip;
}

Customer.prototype.getPizzas() {
  return this.pizzas;
}

Customer.prototype.getDiscount() {
  return this.discount;
}


Customer.prototype.getType() {
  return this.type;
}
Customer.prototype.getTotal() {
  return this.total;
}

Pizza.prototype.getPrice() {
  //return this.cost;
}

Pizza.prototype.getSize() {
  return this.size;
}

Pizza.prototype.getToppings() {
  return this.toppings;
}

//Set
Customer.prototype.setName() {
  this.name = $("input#name").val();
}

Customer.prototype.setZip() {
  this.zip = $("input#zip").val();
}

Customer.prototype.setPizzas() {
  this.pizzas = [];
}

Customer.prototype.setDiscount() {
  this.discount = totalDiscount;
}

Customer.prototype.setType() {
  this.type = $("input#type").val();
}

Customer.prototype.setTotal() {
  this.total = orderTotal;
}

Pizza.prototype.setPrice() {
  this.cost = $("input#size").val();
}

Pizza.prototype.setSize() {
  this.size = $("input#size").val();
}

Pizza.prototype.setToppings() {
  this.toppings = $("input#toppings").val();
}

var costOfPizzas = this.pizzas.forEach(pizza) {

}
var toppings = [];
var toppingsPrice = function(toppings) {

}



//user interface logic
$(document).ready(function) {

}
