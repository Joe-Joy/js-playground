// normal function
function Shape() {}
// normal function inside the prototype duplicate function
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};
// constructor function
function Circle(radius) {
  this.radius = radius;
}

// constructor function inside the prototype draw function
Circle.prototype.draw = function () {
  console.log("draw");
};
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const s = new Shape();
const c = new Circle(10);
s;
c;
