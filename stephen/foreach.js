// adding numbers
var numbers = [1, 2, 3, 4, 5];
var sum = 0;
numbers.forEach(function (number) {
  return (sum += number);
});
console.log(sum);

//normal method
var colors = ["red", "green", "blue", "yellow"];
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//forEach method
var colors = ["red", "green", "blue", "yellow"];
colors.forEach(function (color) {
  console.log(color);
});

// example
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 },
];
var areas = images.forEach(function (image) {
  return image.height * image.width;
});
console.log(areas);
