const Emitter = require("./emitter");
const NodeEmitter = require("events");

const emitter = new Emitter();

const event = require("./config").events;

emitter.on(event.GREET, (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.on(event.GREET, (name) => console.log(`How are you, ${name}?`));

emitter.on(event.INTRO, (name, age, city) => {
  console.log(
    `Hello, my name is ${name}, I am ${age} years old and I live in ${city}.`
  );
});

emitter.emit(event.GREET, "Alice");
emitter.emit(event.INTRO, "Maverick", 25, "New York");
