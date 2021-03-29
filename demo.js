function add(x, y) {
    var z = x + y;
    console.log(z);
  }
  add(5, 4);

  result = " ";
for (var i = 0; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    result += `${i}`;
  }
  result += `\n;`;
}
console.log(result);

var x;
var y;
x = "foo";
console.log(x);
console.log(y);
y = "late foo";
console.log(y);

// function scope
function foo() {
  var fruit = "apple";
  console.log(fruit);
}
foo(); //inside function: apple
console.log(); //error: fruit is not defined
// ------------------------------------------
function foo() {
  if (true) {
    var fruit1 = "apple";
    const fruit2 = "banana";
    let fruit3 = "strawberry";
    console.log(fruit2);
  }
  console.log(fruit1);
  }

foo();

//   while loop
//   let x = 1;
//   while (x < 10) {
//     console.log(x);
//     x = x + 2;
//   }

// var x=0;
// do{
//   console.log(x);
//   x=x+3;
// }while(x<10);


function ashliadd(a,b){
  var total = a + b;
  return total;

}
var add=ashliadd(10,12);
console.log(add);

function greet(name,message){
  if(name){
    return("Hello"+name+"!"+message);
  }else{
    return("Hello, Ashli!"+message);
  }
}
greet("danika", "hi");


var arr=["ashli","jino","danika","nisha","laitha","jency","ilakkiya"];
for (var i=0; i<arr.length; i++){
  console.log(arr[i]);
}

var names = new Array("ashli","jino","danika","kezia","daniel");
for (var i=0; i<names.length; i++){
  names[i];
}

var languages = new Array();
var students = new Array(10);
console.log(students);

 var frontEndFrameWorks=new Array("angular js","react js","view js");
 frontEndFrameWorks.push("js");
 frontEndFrameWorks[99]='javascript';
 console.log(frontEndFrameWorks);

var employees = [
  {
    id: '1',
    name:'ashli',
    isActive:'true',
    position:'TL'
    
  },
  {
    id: '2',
    name:'jino',
    isActive:'true',
    position:'Manager'
  },
  {
    id: '3',
    name:'danika',
    isActive:'false',
    position:'senior manager'
  }
];
console.log(employees);

for (var employee of employees){
  console.log(employee.name)
}

var colors=["red", "green", "blue"];
result='';
for (let color of colors){
  result += `${color} `;
}

var fruits=['orage','apple','kiwi','garpes'];
console.log(fruits.toString('-'));

var fruits=['orage','apple','kiwi','garpes'];
console.log(fruits.reverse());

var emp = { id: 102, name: "kumar", salary: 40000 };
console.log(emp);

function w(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;

}
var e = new w(1,'ashli',400);
console.log(e);