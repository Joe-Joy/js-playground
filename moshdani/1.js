function Person(name) {
  this.name = name;
//   Object.assign({},Height);
}
Person.prototype.ashli = function () {
  console.log(this.name + "this name was correct");
};
const man = new Person("joe");
console.log(man.ashli);

Person.prototype.constructor = new Height();
// 2
function Height() {
  console.log("hieght is measured");
}

const man_height = new Height();

