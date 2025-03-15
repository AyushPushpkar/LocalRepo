function person(name) {
  this.name = name;
  this.sayHello = function () {
    console.log("Hello, my name is " + this.name);
  };
}

const person1 = new person("Alice");
const person2 = new person("Bob");

console.log(person1.sayHello === person2.sayHello); // false (Each object gets its own copy)

/*...........................................................................*/

// Instead of defining methods inside the constructor, we can use prototype
//  so that all objects share a single copy of the method.

function Person(name) {
  this.name = name;
}

// Adding a method to Person's prototype
Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

const person3 = new Person("Alice");
const person4 = new Person("Bob");

console.log(person3.sayHello === person4.sayHello); // true (Shared function)
