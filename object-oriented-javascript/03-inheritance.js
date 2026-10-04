// JavaScript OOP Basics: Inheritance

// Inheritance allows a child class to reuse properties and methods
// from a parent class. extends creates the parent-child relationship.

class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log("I am " + this.name);
  }
}

// ============================================================
// 1. Single inheritance: one parent and one child
// ============================================================

class Student extends Person {
  study() {
    console.log(this.name + " is studying");
  }
}

const student = new Student("Ayush");
student.introduce();
student.study();


// ============================================================
// 2. Multilevel inheritance: grandparent -> parent -> child
// ============================================================

class Animal {
  move() {
    console.log("Animal moves");
  }
}

class Mammal extends Animal {
  breathe() {
    console.log("Mammal breathes");
  }
}

class Dog extends Mammal {
  bark() {
    console.log("Dog barks");
  }
}

const dog = new Dog();
dog.move();    // inherited from Animal
dog.breathe(); // inherited from Mammal
dog.bark();    // defined in Dog


// ============================================================
// 3. Hierarchical inheritance: one parent and many children
// ============================================================

class Shape {
  describe() {
    console.log("This is a shape");
  }
}

class Circle extends Shape {
  circleInfo() {
    console.log("This is a circle");
  }
}

class Square extends Shape {
  squareInfo() {
    console.log("This is a square");
  }
}

new Circle().describe();
new Square().describe();


// ============================================================
// 4. Multiple inheritance in JavaScript
// ============================================================

// JavaScript does not allow: class Child extends ParentA, ParentB.
// A class can extend only one class.
// Mixins provide multiple-inheritance-like behavior.

const CanFly = (Base) => class extends Base {
  fly() {
    console.log("Flying");
  }
};

const CanSwim = (Base) => class extends Base {
  swim() {
    console.log("Swimming");
  }
};

class Creature {}
class Duck extends CanFly(CanSwim(Creature)) {}

const duck = new Duck();
duck.fly();
duck.swim();


// ============================================================
// 5. Hybrid inheritance
// ============================================================

// Hybrid inheritance combines more than one inheritance pattern.
// JavaScript can model it with class chains and mixins.
class Vehicle {
  start() {
    console.log("Vehicle started");
  }
}

class Car extends Vehicle {}
class ElectricCar extends CanFly(Car) {
  charge() {
    console.log("Charging");
  }
}

const electricCar = new ElectricCar();
electricCar.start();
electricCar.fly();
electricCar.charge();