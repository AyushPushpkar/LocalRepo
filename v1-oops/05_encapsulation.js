// JavaScript OOP Basics: Encapsulation

// Encapsulation keeps data and the methods that control it together.
// It also prevents outside code from changing internal data directly.

// ============================================================
// 1. Private fields with #
// ============================================================

class BankAccount {
  #balance = 0;

  constructor(owner, startingBalance) {
    this.owner = owner;
    this.#balance = startingBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return true;
    }
    return false;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Ayush", 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // 1300

// account.#balance is an error outside the class.
// Access happens through controlled methods such as getBalance().


// ============================================================
// 2. Getters and setters
// ============================================================

class User {
  #age = 0;

  constructor(name) {
    this.name = name;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (value >= 0) {
      this.#age = value;
    }
  }
}

const user = new User("Ayush");
user.age = 20;
console.log(user.age); // 20

// age looks like a normal property, but the getter and setter control it.


// ============================================================
// 3. Convention-based protection
// ============================================================

// An underscore is only a convention in JavaScript, not true privacy.
class Counter {
  constructor() {
    this._count = 0;
  }

  increment() {
    this._count++;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter._count); // accessible, so this is not truly private