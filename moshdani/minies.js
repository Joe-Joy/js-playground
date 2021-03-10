// mammal, person - eat, walk
// fish - eat, swimming

function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}
const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("Walking");
  },
};
const canSwim = {
  swim: function () {
    console.log("Swimming");
  },
};

function Person() {}
function Goldfish() {}
mixin(Person.prototype, canWalk, canEat);

const person = new Person();
console.log(person);

mixin(goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log(goldfish);

goldfish;
person;
