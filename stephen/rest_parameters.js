
function addingNumbers(...numbers) {
  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);
}

console.log(addingNumbers(1, 2, 3, 4, 5));
console.log(addingNumbers(12, 34, 55, 66, 77, 82, 45));


function unshift(array, a, b, c, d, e) {
    return [a, b, c, d, e].concat(array);
  }
  unshift("ashli",1,3);