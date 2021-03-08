// spread parameters - separate a word in single parameters
var vol = ["a", "e", "i", "o", "u"];
var fruits = [" orange", "banana", "papaya", "pineapple"];
var colors = [" green", "blue", "purple", "violet"];

console.log(vol + fruits + colors);

console.log(...vol, ...fruits, ...colors, "pink", "brown");

function validateShoppingList(...items) {
  if (items.lastIndexOf("milk") < 0) {
    return [...items, "milk"];
  }
  return items;
}
console.log(validateShoppingList("orange", "banana", "pap", "dryfruits"));
