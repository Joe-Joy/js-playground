const companies = ["facebook", "ola", "uber", "instagram"];

var { length } = companies;
length;

// destructuring arrays and objects
var companies = [
  { name: "facebook", location: "USA" },
  { name: "twitter", location: "France" },
  { name: "instagram", location: "California" },
];
var [location] = companies;
console.log(location);



const points = [
    [4,5],
    [5,6],
    [0,40]
];
points.map(([x, y]) =>{
    return(x,y);
});