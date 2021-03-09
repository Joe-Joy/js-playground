// constuctor method - the variable name start with captial letter

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("finally finished");
  };
}

let another_circle = new Circle(10);
another_circle;
