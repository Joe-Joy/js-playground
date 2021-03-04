function calulateAgetoDays(age) {
  var leafyear = age / 4;
  return age * 365 + Math.round(leafyear) + " Days";
}

console.log(calulateAgetoDays(23));
