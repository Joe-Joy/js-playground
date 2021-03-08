// using reduce method adding numbers
var numbers = [1, 2, 20, 55, 39, 38, 29, 283]; //467

var sum = 0;

numbers.reduce(function (sum, number) {
  return sum + number;
}, 10);

// using reduce method reducing numbers
var numbers = [1, 2, 20, 55, 39, 38, 29, 283]; //467

var sum = 0;

numbers.reduce(function (sum, number) {
  return sum + number;
}, -10);

// using reduce with push method
var colors = [{ color: "red" }, { color: "blue" }, { color: "yellow" }];
colors.reduce(
  function (previous, colors) {
    previous.push(colors.color);
    return previous;
  },
  ["black", "brown", "violet"]
);
