// destructuring in ES6 - how to modified simplest method in object
// (THIS IS EX5 MEHTOD)
var savedFiled = {
  extension: "jpg",
  name: "repost",
  size: 12020,
};
function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is the size is ${file.size}.`;
}
console.log(fileSummary(savedFiled));



//   OR (THIS IS ES6 METHOD)
var savedFiled = {
  extension: "jpg",
  name: "repost",
  size: 12020,
};
function fileSummary({ name, extension, size }) {
  return `The file ${name}.${extension} is the size is ${size}.`;
}
console.log(fileSummary(savedFiled));
