// JavaScript OOP Basics: Classes

// A class is a blueprint for creating objects.
// An object stores data in properties and behavior in methods.

// C++:
// class Student {
// public:
//     string name;
//     void introduce() { cout << name << endl; }
// };
class Student {
  introduce() {
    console.log("My name is " + this.name);
  }
}

const firstStudent = new Student();
firstStudent.name = "Ayush";
firstStudent.introduce(); // My name is Ayush

// this refers to the current object.


// ============================================================
// Class properties and methods
// ============================================================

class Counter {
  count = 0;

  increment() {
    this.count++;
  }

  getCount() {
    return this.count;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2

// Each object made from a class has its own property values.
const anotherCounter = new Counter();
console.log(anotherCounter.getCount()); // 0


// ============================================================
// Static properties and methods
// ============================================================

// Static members belong to the class itself, not to individual objects.
class MathHelper {
  static square(number) {
    return number * number;
  }
}

console.log(MathHelper.square(5)); // 25
// MathHelper.square() is valid; new MathHelper().square() is not.