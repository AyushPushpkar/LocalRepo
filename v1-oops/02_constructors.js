// JavaScript OOP Basics: Constructors

// A constructor runs automatically when new creates an object.
// It is used to initialize the object's properties.

// C++:
// class Rectangle {
// public:
//     int length, width;
//     Rectangle(int l, int w) : length(l), width(w) {}
// };
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

const rectangle = new Rectangle(5, 4);
console.log(rectangle.area()); // 20

// constructor parameters can have default values.
class User {
  constructor(name = "Guest", age = 0) {
    this.name = name;
    this.age = age;
  }
}

const defaultUser = new User();
const namedUser = new User("Ayush", 20);
console.log(defaultUser); // User { name: 'Guest', age: 0 }
console.log(namedUser);   // User { name: 'Ayush', age: 20 }

// A class can have only one constructor method.
// Use default parameters or conditional logic for multiple input patterns.


// ============================================================
// Calling a parent constructor with super()
// ============================================================

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // initialize the Animal part first
    this.breed = breed;
  }
}

const dog = new Dog("Bruno", "Labrador");
console.log(dog.name, dog.breed); // Bruno Labrador