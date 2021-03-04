
function date() {
  var d = new Date();
  return d.toLocaleDateString();
}

function Time() {
  var d = new Date();
  return d.toLocaleTimeString();
}

console.log(date(), Time());
console.log(date());
console.log(Time());
