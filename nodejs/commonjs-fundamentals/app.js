const mod = require("./greet.js"); //commonJS
const { greet, sub } = require("./greet.js");
console.log(mod);
mod.greet();

console.log(mod.sub(5, 6));

greet();
console.log(sub(100, 31));

const obj = require("./greeting.json");
console.log(obj);
