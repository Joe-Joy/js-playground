// factory_functions
function createElement(radius) {
  return {
    radius,
    draw: function () {
      console.log("finally finished");
    },
  };
}
const circle = createElement(1);
circle;
