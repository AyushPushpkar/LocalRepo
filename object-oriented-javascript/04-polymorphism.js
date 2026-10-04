// JavaScript OOP Basics: Polymorphism

// Polymorphism means "many forms": the same method call can produce
// different behavior depending on the object receiving the call.

// ============================================================
// 1. Runtime polymorphism through method overriding
// ============================================================

class Animal {
  sound() {
    console.log("Some animal sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}

// The same sound() call behaves differently for each object.
const animals = [new Dog(), new Cat(), new Animal()];
for (const animal of animals) {
  animal.sound();
}


// ============================================================
// 2. Calling the parent version with super
// ============================================================

class Employee {
  describe() {
    console.log("I am an employee");
  }
}

class Developer extends Employee {
  describe() {
    super.describe();
    console.log("I write code");
  }
}

new Developer().describe();


// ============================================================
// 3. Duck typing
// ============================================================

// JavaScript often focuses on whether an object has the required method,
// rather than checking its class. This is called duck typing.
function makeSound(object) {
  object.sound();
}

const robot = {
  sound() {
    console.log("Robot beep");
  },
};

makeSound(new Dog());
makeSound(robot);


// JavaScript does not support traditional C++ method overloading by
// parameter count. Default parameters and rest parameters are common alternatives.
function add(first, second = 0, ...remaining) {
  return first + second + remaining.reduce((sum, value) => sum + value, 0);
}

console.log(add(2));       // 2
console.log(add(2, 3));    // 5
console.log(add(2, 3, 4)); // 9