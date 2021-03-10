// normal function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("finally finished");
  };
}
const c1 = new Circle(1);

// prototype vs instance member
function Circle(radius) {
  // instance member
  this.radius = radius;
}
// prototype member
Circle.prototype.draw = function () {
  console.log("finally finished");
};
const c1 = new Circle(1);


Circle.prototype.toString = function () {
  return "Circle with radius" + this.radius;
};

// return all the members in function (instance + prototype)
for (let key in c1) console.log(key); //draw, radius, toString

c1.hasOwnProperty('radius');
                   // true - because this is a  own property
c1.hasOwnProperty('draw');
                  // false - because this is a prototype property