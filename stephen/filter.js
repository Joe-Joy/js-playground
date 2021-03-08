// normal method
var products = [
  { name: "banana", type: "fruits" },
  { name: "cucumber", type: "veg" },
  { name: "orange", type: "fruits" },
  { name: "graps", type: "fruits" },
];
var filterproduct = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === "fruits") {
    filterproduct.push(products[i]);
  }
}
console.log(filterproduct);
console.log(products);

// filter method
var products = [
  { name: "banana", type: "fruits" },
  { name: "cucumber", type: "veg" },
  { name: "orange", type: "fruits" },
  { name: "graps", type: "fruits" },
];

var filterproduct = products.filter(function (product) {
  return product.type === "veg";
});

console.log(filterproduct);

//
var products = [
  { name: "banana", type: "fruits", quantity: 5, price: 20 },
  { name: "potato", type: "veg", quantity: 5, price: 10 },
  { name: "orange", type: "fruits", quantity: 10, price: 50 },
  { name: "graps", type: "fruits", quantity: 30, price: 25 },
];

var filterproduct = products.filter(function (product) {
  if (product.type === "fruits" && product.quantity > 5 && product.price > 10) {
    return true;
  } else {
    return false;
  }
});

console.log(filterproduct);





function jino((arg) => (err, data) => {})