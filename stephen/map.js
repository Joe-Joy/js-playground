// normal method
var numbers = [1, 2, 4, 5, 6, 7, 8];
var dnumbers = [];
var tnumbers = [];
for (var i = 0; i < numbers.length; i++) {
  dnumbers.push(numbers[i] * 2);
  tnumbers.push(numbers[i] * 3);
}
console.log(numbers);
console.log(dnumbers);
console.log(tnumbers);

// map method
var numbers = [1, 2, 4, 5, 6, 7, 8];
var dnumbers = [];
var dnumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(dnumbers);

// map method function using => symbol
var numbers = [1, 2, 4, 5, 6, 7, 8];
var dnumbers = [];
var dnumbers = numbers.map((number) => number * 2);
console.log(dnumbers);

// map method
var persons = [
  { name: "ashli", address: "orikottai" },
  { name: "joe", address: "chennai" },
];

var names = persons.map(function (person) {
  return person.name;
});
console.log(names);


// ashli is on team undefined,joe is on team undefined
var team ={
  members: ["ashli","joe"],
  teamName: ["kabadi","football"],
  summary:function () {
    return this.members.map(function (member) {
      return member + " is on team "+this.teamName;
    });
  }
};
team.summary();




