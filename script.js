function change() {
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
  var element = document.createElement("demo");
  element.textContent = "Hello, World";
  document.body.appendChild(element);
}

function changes() {
  document.getElementById("demo").innerHTML = "Hellosssss!";
}

function currentTime() {
  document.getElementById("demo").innerHTML = Date();
}

document.getElementById("myBtn").addEventListener("click", function () {
  /*(within a single function onclick method)*/ this.innerHTML = "hi";
});



// console.log()