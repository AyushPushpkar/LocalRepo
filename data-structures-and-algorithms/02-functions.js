// JavaScript DSA Basics: Functions
// C++ equivalents are written directly above the JavaScript code.

// ============================================================
// 1. Defining and calling a function
// ============================================================

// C++:
// void greet(string name) {
//     cout << "Hello " << name << endl;
// }
// greet("Ayush");
function greet(name) {
  console.log("Hello " + name);
}

greet("Ayush");

// JavaScript uses function instead of a C++ return type such as void.
// console.log() is roughly similar to cout, but it is not identical.


// ============================================================
// 2. Function with a calculation
// ============================================================

// C++:
// void square(int num) {
//     cout << num * num << endl;
// }
// square(4);
function square(num) {
  console.log(num * num);
}

square(4);

// For a DSA function that returns a value, use return just as in C++:

// C++:
// int squareValue(int num) {
//     return num * num;
// }
// int answer = squareValue(4);
function squareValue(num) {
  return num * num;
}

let answer = squareValue(4);
console.log(answer); // 16


// ============================================================
// 3. Functions are first-class values
// ============================================================

// In JavaScript, a function can be stored in a variable, passed to
// another function, and returned from another function.

// C++:
// void logGreeting(function<void(string)> fn) {
//     fn("Daffy");
// }
// logGreeting(greet);
function logGreeting(fn) {
  fn("Daffy");
}

logGreeting(greet);

// Think of fn as a variable that stores a function.
// This is useful in DSA for comparators, callbacks, and custom behavior.


// ============================================================
// 4. Function expression
// ============================================================

// C++ lambda equivalent:
// auto fn = []() {
//     cout << "function expression" << endl;
// };
// fn();
const fn = function () {
  console.log("function expression");
};

fn();

// A function expression creates a function and stores it in a variable.
// Unlike a function declaration, fn is created when this line executes.


// ============================================================
// 5. Passing a function directly
// ============================================================

// C++ lambda equivalent:
// logGreeting([](string name) {
//     cout << "on the fly" << endl;
// });
logGreeting(function () {
  console.log("on the fly");
});

// The function is created and passed immediately without giving it a name.
// This is called an anonymous function.


// ============================================================
// 6. JavaScript arrow function
// ============================================================

// C++ lambda equivalent:
// auto add = [](int a, int b) {
//     return a + b;
// };
// cout << add(2, 3) << endl;
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // 5

// Short arrow-function form:
// C++: auto doubleValue = [](int num) { return num * 2; };
const doubleValue = (num) => num * 2;
console.log(doubleValue(4)); // 8


// ============================================================
// 7. Passing a comparator, common in DSA
// ============================================================

// C++:
// sort(numbers.begin(), numbers.end(), greater<int>());
let numbers = [4, 1, 7, 2];
numbers.sort((a, b) => b - a);

console.log(numbers); // [ 7, 4, 2, 1 ]

// The function (a, b) => b - a tells sort() how to compare two values.
// b - a means descending order; a - b means ascending order.


// ============================================================
// 8. Default parameters
// ============================================================

// C++:
// void welcome(string name = "Guest") {
//     cout << "Welcome " << name << endl;
// }
// welcome();
// welcome("Ayush");
function welcome(name = "Guest") {
  console.log("Welcome " + name);
}

welcome();
welcome("Ayush");

// JavaScript uses undefined when an argument is not provided.
// The default value is used in that case.


// ============================================================
// 9. Rest parameters: variable number of arguments
// ============================================================

// C++:
// int sum(vector<int> numbers) {
//     int total = 0;
//     for (int number : numbers) total += number;
//     return total;
// }
// sum({1, 2, 3, 4});
function sum(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // 10

// ...numbers collects all remaining arguments into an array.


// ============================================================
// Quick C++ to JavaScript reference
// ============================================================

// void greet(string name) {}       -> function greet(name) {}
// int square(int num) { return; }  -> function square(num) { return; }
// greet("Ayush");                  -> greet("Ayush");
// cout << value << endl;           -> console.log(value);
// lambda                         -> function expression or arrow function
// function argument               -> callback
// std::function<...>               -> function parameter
// return                          -> return
