// polymorphism - to create many forms
function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle() {}

Circle.prototype.duplicate = function () {
  console.log("duplicate circle");
};

extend(Circle, Shape);

function Square() {}

Square.prototype.duplicate = function () {
  console.log("duplicate square");
};

extend (Square, Shape);

const shapes = [new Circle(), new Square()];

for (let shape of shapes) {
  shape.duplicate();
}
shapes;
