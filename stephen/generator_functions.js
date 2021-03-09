// generator functions
function* generatorFunction() {
  document.write("This will be executed first.");
  yield "Hello, ";
  document.write("I will be printed after the pause");
  yield "World!";
}
const generatorObject = generatorFunction();
document.write(generatorObject.next().value);
document.write(generatorObject.next().value);
document.write(generatorObject.next().value);

//
function* colors() {
  yield "red";
  yield "green";
  yield "blue";
  yield "black";
}
let gen = colors();
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//  OR

function* colors() {
  yield "red";
  yield "green";
  yield "blue";
  yield "black";
}
var myColors = [];
for (let color of colors) {
  myColors.push(color);
}
console.log(myColors);

// generator functions
const engineeringTeam = {
  size: 3,
  department: "engineering",
  lead: "jill",
  manager: "Alex",
  engineer: "ashli",
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

let names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}
names;

// generator functions with 2 objects
const testingTeam = {
  lead: "joe",
  tester: "milani",
};
const engineeringTeam = {
  testingTeam,
  size: 3,
  department: "engineering",
  lead: "jill",
  manager: "Alex",
  engineer: "ashli",
};
function* testingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

function* engineeringTeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = testingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator; //yield* - means couple of pair in testingTeamIterator//
}

let names = [];
for (let name of engineeringTeamIterator(engineeringTeam)) {
  names.push(name);
}
names;

//  or

const testingTeam = {
  lead: "joe",
  tester: "milani",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  },
};
const engineeringTeam = {
  testingTeam,
  size: 3,
  department: "engineering",
  lead: "jill",
  manager: "Alex",
  engineer: "ashli",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  },
};

let names = [];
for (let name of engineeringTeam) {
  names.push(name);
}
names;

// childres tree methods
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
  *[Symbol.iterator]() {
    yield this.content;
    for (let child of children){
      yield* child;
    }
  }
}
const children = [
  new Comment("good children", []),
  new Comment("bad children", []),
  new Comment("nothing", []),
];

const tree = new Comment("great post", children);
tree;

const values =[];
for (let value of tree){
  values.push(value);
}
values;
