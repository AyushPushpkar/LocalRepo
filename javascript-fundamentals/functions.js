function greet(name) {
  console.log("Hello " + name);
}

greet("Ayush");

function square(num) {
  console.log(num * num);
}
square(4);

//function are first class
function logGreeting(fn) {
  fn("Daffy");
}

logGreeting(greet);

//function expression
const fn = function () {
  console.log("function expression");
};

fn();

//use the function expressionon the fly
logGreeting(function () {
  console.log("on the fly");
});
