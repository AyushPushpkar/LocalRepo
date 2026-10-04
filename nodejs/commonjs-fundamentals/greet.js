// Module - piece of  code used accross all node js application
function greet(a, b) {
  console.log(`Hello 🕵️\t${a + b}`);
}

//greet();

//module.exports = greet;

function sub(a, b) {
  const res = a > b ? a - b : b - a;
  return res;
}

module.exports = {
  greet: greet,
  sub: sub,
};
