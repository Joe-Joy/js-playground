  <!-- Thu Mar 04 2021 11:25:24 GMT+0530 (India Standard Time) -->

function dateTime() {
var date = new Date();
return date;
}
console.log(dateTime());

  <!-- 04/03/2021 -->

function date() {
var d = new Date();
return d.toLocaleDateString();
}
console.log(date());

  <!-- 11:46:48 -->

function Time() {
var d = new Date();
return d.toLocaleTimeString();
}
console.log(Time());
