// JavaScript DSA Basics: Variables and Data Types
// C++ equivalents are written directly above the JavaScript code.

// ============================================================
// 1. let: a variable that can be reassigned
// ============================================================

// C++:
// string name = "Ayush";
// cout << name << endl;
let name = "Ayush";
console.log(name); // Ayush

// C++ variables have a declared type. JavaScript variables do not
// need the type written before the variable name.


// ============================================================
// 2. Reassigning a let variable
// ============================================================

// C++:
// double interestRate = 0.3;
// interestRate = 1;
// cout << interestRate << endl;
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate); // 1

// let allows reassignment. JavaScript also allows the value to change
// from one type to another, although that is usually poor DSA style.

// JavaScript:
// name = 390;
// C++ would reject this if name was declared as string.
name = 390;
console.log(name); // 390


// ============================================================
// 3. const: a variable that cannot be reassigned
// ============================================================

// C++:
// const double pi = 3.14;
// cout << pi << endl;
const pi = 3.14;
console.log(pi); // 3.14

// pi = 4; // TypeError: Assignment to constant variable

// const is similar to const in C++, but remember that const protects
// reassignment of the variable itself. Objects and arrays need a
// separate explanation because their contents can still be changed.


// ============================================================
// 4. undefined: no value has been assigned
// ============================================================

// C++:
// string firstName; // local primitive variable is not safely initialized
// JavaScript explicitly gives an unassigned variable the value undefined.
let firstName = undefined;
console.log(firstName);        // undefined
console.log(typeof firstName); // undefined

// Usually, this is shorter:
// let firstName;


// ============================================================
// 5. null: intentional absence of a value
// ============================================================

// C++:
// string* selectedColor = nullptr;
// JavaScript:
let selectedColor = null;
console.log(selectedColor);        // null
console.log(typeof selectedColor); // object

// typeof null returning "object" is a historical JavaScript quirk.
// To check for null, use:
console.log(selectedColor === null); // true


// ============================================================
// 6. typeof: checking the current JavaScript type
// ============================================================

// C++:
// The type of name is fixed at compile time as string.
console.log(typeof name); // number, because name was reassigned to 390

name = "Ayush";
console.log(typeof name); // string

name = 390;
console.log(typeof name); // number

// JavaScript is dynamically typed: the value has a type, and the same
// variable can later refer to a value of a different type.


// ============================================================
// 7. Common JavaScript and C++ type comparisons
// ============================================================

// C++: string text = "hello";
let text = "hello";

// C++: int count = 10;
let count = 10;

// C++: double average = 4.5;
let average = 4.5;

// C++: bool isReady = true;
let isReady = true;

console.log(typeof text);    // string
console.log(typeof count);   // number
console.log(typeof average); // number
console.log(typeof isReady); // boolean

// JavaScript uses one normal number type for integers and decimals.
// C++ separates int, long long, float, and double.


// ============================================================
// 8. var: older variable declaration
// ============================================================

// C++ has no exact equivalent to JavaScript var.
// var is older JavaScript syntax and is function-scoped.
var oldStyle = "legacy";
console.log(oldStyle); // legacy

// For modern JavaScript DSA code:
// - use let when the variable will be reassigned
// - use const when the variable will not be reassigned
// - avoid var in new code


// ============================================================
// 9. let versus const in a DSA example
// ============================================================

// C++:
// vector<int> numbers = {1, 2, 3};
// numbers.push_back(4);
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [ 1, 2, 3, 4 ]

// The array contents can change even though the variable is const.
// This would fail because it tries to replace the whole array:
// numbers = [10, 20];


// ============================================================
// 10. Object as a pair or record
// ============================================================

// C++ pair<string, string> Optimus = {"Autobot", "Truck"};
// cout << Optimus.first << endl;
// cout << Optimus.second << endl;
const optimus = {
  faction: "Autobot",
  vehicle: "Truck",
};

console.log(optimus);

// C++:
// Optimus.first = "prime";
// Optimus.second = "Red Truck";
optimus.faction = "prime";
optimus["vehicle"] = "Red Truck";

console.log(optimus);

// Object properties are named, so this is easier to understand than
// pair.first and pair.second. Use dot notation or bracket notation.


// ============================================================
// 11. Vector of pairs
// ============================================================

// C++:
// vector<pair<int, int>> points;
// int pointCount = 3;
// while (pointCount--) {
//     int x = pointCount + 1;
//     int y = (pointCount + 1) * 2;
//     points.push_back({x, y});
// }
// cout << points[0].first << endl;
// cout << points[0].second << endl;
let points = [];
let pointCount = 3;
while (pointCount > 0) {
  const x = pointCount;
  const y = pointCount * 2;
  points.push({ first: x, second: y });
  pointCount--;
}

console.log(points[0].first);  // 3
console.log(points[0].second); // 6

// C++ range-based loop:
// for (auto [x, y] : points) {
//     cout << x << " " << y << endl;
// }
for (const point of points) {
	console.log(point.first, point.second);
}

// In JavaScript, an array of objects is usually clearer than an array
// of two-element arrays because each value has a meaningful property name.

// Another direct JavaScript translation is:
// C++:
// vector<pair<int, int>> pairs;
// int count = 2;
// while (count--) pairs.push_back({count + 1, (count + 1) * 2});
let pairs = [];
let pairCount = 2;
while (pairCount > 0) {
  pairs.push([pairCount, pairCount * 2]);
  pairCount--;
}
console.log(pairs[0][0]); // 2, equivalent to pairs[0].first
console.log(pairs[0][1]); // 4, equivalent to pairs[0].second


// ============================================================
// 12. Vector with n positions initialized to -1
// ============================================================

// C++:
// int n = 5;
// vector<int> nums(n, -1);
let n = 5;
let nums = new Array(n).fill(-1);

console.log(nums); // [ -1, -1, -1, -1, -1 ]

// C++:
// nums[2] = 10;
nums[2] = 10;
console.log(nums); // [ -1, -1, 10, -1, -1 ]

// new Array(n) creates n empty positions. fill(-1) initializes
// every position with -1, just like vector<int>(n, -1).


// ============================================================
// Quick C++ to JavaScript reference
// ============================================================

// string name = "Ayush";       -> let name = "Ayush";
// const double pi = 3.14;      -> const pi = 3.14;
// bool ready = true;            -> let ready = true;
// int count = 10;               -> let count = 10;
// nullptr                       -> null
// uninitialized JavaScript var  -> undefined
// cout << value << endl;        -> console.log(value);
// compile-time fixed type       -> dynamic runtime type
// pair<string, string> p;       -> let p = {first: "", second: ""};
// vector<pair<int, int>> v;     -> let v = [{first: 1, second: 2}];
// vector<int> nums(n, -1);      -> new Array(n).fill(-1)
