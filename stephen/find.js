// FIND MEHTOD
var humans = [
  { name: "ashli" },
  { name: "joe" },
  { name: "bob" },
  { name: "danika" },
];

var names = humans.find(function (human) {
  return human.name === "bob";
});
console.log(names);

// INSIDE THE FIND FUNCTION
var names = [
  { id: 1, name: "ashli" },
  { id: 2, name: "joe" },
  { id: 3, name: "bob" },
];

var special = { id: 1, name: "ashlijoe" };

function names_special(names, special) {
  return names.find(function (name) {
    return name.id === special.id;
  });
}
console.log(names_special(names, special));
