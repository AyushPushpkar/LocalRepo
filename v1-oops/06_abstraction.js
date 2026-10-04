// JavaScript OOP Basics: Abstraction

// Abstraction shows only the necessary interface and hides implementation
// details. The caller uses what an object does, not how it does it.

// ============================================================
// 1. Abstraction through public methods
// ============================================================

class CoffeeMachine {
  makeCoffee() {
    this.#boilWater();
    this.#grindBeans();
    console.log("Coffee is ready");
  }

  #boilWater() {
    console.log("Boiling water");
  }

  #grindBeans() {
    console.log("Grinding beans");
  }
}

const machine = new CoffeeMachine();
machine.makeCoffee();
// The caller uses makeCoffee() without managing boiling or grinding.


// ============================================================
// 2. Abstract-style base class
// ============================================================

// JavaScript has no abstract keyword like C++ or Java.
// We can imitate an abstract method by throwing an error in the base class.
class Payment {
  pay() {
    throw new Error("Child classes must implement pay()");
  }
}

class CardPayment extends Payment {
  pay(amount) {
    console.log("Paid " + amount + " using a card");
  }
}

class CashPayment extends Payment {
  pay(amount) {
    console.log("Paid " + amount + " using cash");
  }
}

const payments = [new CardPayment(), new CashPayment()];
for (const payment of payments) {
  payment.pay(500);
}

// Payment defines the required interface.
// Each child class provides its own implementation.


// ============================================================
// OOP concepts quick reference
// ============================================================

// Class: blueprint for objects.
// Object: instance created from a class.
// Constructor: initializes a new object.
// Inheritance: child reuses parent behavior.
// Polymorphism: same method call, different behavior.
// Encapsulation: protects data through controlled access.
// Abstraction: hides details and exposes only necessary operations.