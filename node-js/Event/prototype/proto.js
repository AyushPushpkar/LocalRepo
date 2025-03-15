function Person(name) {
  this.name = name;
}

// Adding a method to Person's prototype
Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

const person1 = new Person("Alice");

console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true (End of prototype chain)
