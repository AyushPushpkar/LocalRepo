// JavaScript DSA Basics: Built-in Functions and Methods
// C++ equivalents are written directly above the JavaScript code.

// ============================================================
// 1. Length and size
// ============================================================

// C++:
// string word = "hello";
// cout << word.size() << endl;
// vector<int> numbers = {10, 20, 30};
// cout << numbers.size() << endl;
const word = "hello";
const numbers = [10, 20, 30];

console.log(word.length);    // 5
console.log(numbers.length); // 3

// JavaScript uses the length property, not length().


// ============================================================
// 2. Maximum, minimum, and absolute value
// ============================================================

// C++:
// max(10, 25);
// min(10, 25);
// abs(-7);
console.log(Math.max(10, 25)); // 25
console.log(Math.min(10, 25)); // 10
console.log(Math.abs(-7));     // 7

// C++ max_element/min_element over a vector:
// *max_element(numbers.begin(), numbers.end());
// *min_element(numbers.begin(), numbers.end());
console.log(Math.max(...numbers)); // 30
console.log(Math.min(...numbers)); // 10

// The ... spread operator sends array elements as separate arguments.


// ============================================================
// 3. Rounding, powers, and square roots
// ============================================================

// C++:
// floor(4.8); ceil(4.2); round(4.5);
// pow(2, 3); sqrt(25);
console.log(Math.floor(4.8));  // 4
console.log(Math.ceil(4.2));   // 5
console.log(Math.round(4.5));  // 5
console.log(Math.trunc(4.8));  // 4, removes the decimal part
console.log(Math.pow(2, 3));   // 8
console.log(Math.sqrt(25));    // 5
console.log(Math.log2(8));     // 3
console.log(Math.log10(100));  // 2

// Modern power syntax:
console.log(2 ** 3); // 8


// ============================================================
// 4. Sorting numbers
// ============================================================

// C++:
// sort(numbers.begin(), numbers.end());
const values = [10, 2, 30, 4];

values.sort((a, b) => a - b);
console.log(values); // [ 2, 4, 10, 30 ]

// C++:
// sort(numbers.rbegin(), numbers.rend());
values.sort((a, b) => b - a);
console.log(values); // [ 30, 10, 4, 2 ]

// Always provide a comparator for numeric sorting. Without one,
// JavaScript sorts values as strings: [10, 2].sort() becomes [10, 2].


// ============================================================
// 5. Searching an array
// ============================================================

// C++:
// find(numbers.begin(), numbers.end(), 10) != numbers.end();
// find(numbers.begin(), numbers.end(), 99) == numbers.end();
const searchValues = [5, 10, 15, 20];

console.log(searchValues.includes(10)); // true
console.log(searchValues.includes(99)); // false
console.log(searchValues.indexOf(15));  // 2
console.log(searchValues.indexOf(99));  // -1, not found

// includes() answers whether a value exists.
// indexOf() returns its first index, or -1 when it does not exist.


// ============================================================
// 6. Adding and removing array elements
// ============================================================

// C++:
// numbers.push_back(40);
// numbers.pop_back();
// numbers.insert(numbers.begin(), 1);
// numbers.erase(numbers.begin());
const items = [20, 30];

items.push(40);      // add to the end
items.pop();         // remove from the end
items.unshift(10);   // add to the beginning
items.shift();       // remove from the beginning

console.log(items); // [ 20, 30 ]

// push/pop are O(1) at the end. unshift/shift are O(n) at the beginning.

// C++ insert one value at an index:
// numbers.insert(numbers.begin() + 1, 15);
// begin() + 1 means the position before the element at index 1.
const insertOne = [10, 20, 30];
// splice(start, deleteCount, itemsToInsert...)
// Start at index 1, delete 0 elements, and insert 15 there.
insertOne.splice(1, 0, 15);
console.log(insertOne); // [ 10, 15, 20, 30 ]

// C++ insert the same value count times:
// numbers.insert(numbers.begin() + 1, 3, 99);
// Insert 99 three times before the current element at index 1.
const insertMany = [10, 20, 30];
insertMany.splice(1, 0, 99, 99, 99);
console.log(insertMany); // [ 10, 99, 99, 99, 20, 30 ]

// C++ insert a range from another container:
// numbers.insert(numbers.begin() + 1, extra.begin(), extra.end());
// The spread operator (...) takes each value from extra and inserts it.
const insertRange = [10, 20, 30];
const extra = [11, 12, 13];
insertRange.splice(1, 0, ...extra);
console.log(insertRange); // [ 10, 11, 12, 13, 20, 30 ]


// ============================================================
// 7. Slicing and splicing
// ============================================================

// C++:
// vector<int> part(numbers.begin() + 1, numbers.begin() + 3);
// C++ starts at index 1 and stops before index 3, so it copies 20 and 30.
const original = [10, 20, 30, 40, 50];
// slice(start, end) copies from start up to, but not including, end.
// It does not change original.
const part = original.slice(1, 3);

console.log(part);     // [ 20, 30 ]
console.log(original); // unchanged

// C++:
// numbers.erase(numbers.begin() + 1, numbers.begin() + 3);
// The range removes index 1 up to, but not including, index 3.
// JavaScript uses deleteCount, so remove 2 elements starting at index 1.
original.splice(1, 2);
console.log(original);  // [ 10, 40, 50 ]

// C++ erase one element:
// numbers.erase(numbers.begin() + 1);
const eraseOne = [10, 20, 30, 40];
// Start at index 1 and remove exactly 1 element: 20.
const removed = eraseOne.splice(1, 1);
console.log(eraseOne); // [ 10, 30, 40 ]
console.log(removed);  // [ 20 ]

// C++ erase a range [first, last):
// numbers.erase(numbers.begin() + 1, numbers.begin() + 3);
// [first, last) includes first but excludes last.
const eraseRange = [10, 20, 30, 40, 50];
// Remove indexes 1 and 2, which are 20 and 30.
eraseRange.splice(1, 2);
console.log(eraseRange); // [ 10, 40, 50 ]

// Erase the first occurrence of a value:
const eraseValue = [10, 20, 30, 20];
// indexOf returns the first index containing 20, which is index 1.
const valueIndex = eraseValue.indexOf(20);
if (valueIndex !== -1) {
  // Only remove the value if it was found.
  eraseValue.splice(valueIndex, 1);
}
console.log(eraseValue); // [ 10, 30, 20 ]

// Replace elements: deleteCount can be followed by new values.
const replaceValues = [10, 20, 30];
// Remove 20 at index 1, then insert 25 and 27 at that same position.
replaceValues.splice(1, 1, 25, 27);
console.log(replaceValues); // [ 10, 25, 27, 30 ]

// splice(start, deleteCount, item1, item2, ...items)
// start: where the operation begins
// deleteCount: how many existing elements to remove
// item1, item2, ...: optional values to insert at start
// splice() changes the original array and returns the removed elements.
// slice() only copies a range and does not change the original array.


// ============================================================
// 8. map, filter, and reduce
// ============================================================

// C++:
// for (int& number : numbers) number *= 2;
const input = [1, 2, 3, 4, 5];
const doubled = input.map((number) => number * 2);
console.log(doubled); // [ 2, 4, 6, 8, 10 ]

// C++:
// copy_if(numbers.begin(), numbers.end(), ... even numbers ...);
const evenNumbers = input.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [ 2, 4 ]

// C++:
// int total = 0;
// for (int number : numbers) total += number;
const total = input.reduce((sum, number) => sum + number, 0);
console.log(total); // 15

// map creates transformed values, filter keeps matching values,
// and reduce combines all values into one result.


// ============================================================
// 9. every, some, and find
// ============================================================

// C++:
// all_of(numbers.begin(), numbers.end(), predicate);
// any_of(numbers.begin(), numbers.end(), predicate);
const positiveNumbers = [2, 4, 6, 8];

console.log(positiveNumbers.every((number) => number > 0)); // true
console.log(positiveNumbers.some((number) => number > 5));  // true
console.log(positiveNumbers.find((number) => number > 5));  // 6

// find() returns the first matching value, or undefined if none matches.


// ============================================================
// 10. Strings: split, join, and useful methods
// ============================================================

// C++:
// string text = "red blue green";
// stringstream can split text by spaces.
const text = "red blue green";
const colors = text.split(" ");

console.log(colors);             // [ 'red', 'blue', 'green' ]
console.log(colors.join("-"));   // red-blue-green
console.log("hello".includes("ell")); // true
console.log("hello".indexOf("l"));    // 2
console.log("hello".toUpperCase());   // HELLO
console.log("HELLO".toLowerCase());   // hello

// trim() removes whitespace from both ends of a string.
console.log("  hello  ".trim()); // hello


// ============================================================
// 11. Converting strings and numbers
// ============================================================

// C++:
// stoi("42"); stod("3.14"); to_string(42);
const numericText = "42";
const decimalText = "3.14";

console.log(Number(numericText));       // 42
console.log(Number(decimalText));       // 3.14
console.log(parseInt("42px", 10));     // 42
console.log(parseFloat("3.14kg"));      // 3.14
console.log(String(42));                // "42"

// Use radix 10 with parseInt for normal decimal numbers.


// ============================================================
// 12. Useful constants, modulo, and random numbers
// ============================================================

// C++:
// INT_MAX; INT_MIN;
console.log(Number.MAX_SAFE_INTEGER); // largest precisely safe integer
console.log(Number.MIN_SAFE_INTEGER); // smallest precisely safe integer
console.log(Infinity);                // positive infinity

// C++:
// const long long MOD = 1e9 + 7;
const MOD = 1000000007n;
const largeLimit = 100000000000000000n; // 1e17

console.log(MOD);                         // 1000000007n
console.log(largeLimit);                  // 100000000000000000n
console.log((largeLimit + 5n) % MOD);     // 300000012n

// Use n to create a BigInt. Do not mix BigInt and Number in one operation:
// 10n + 5       // TypeError
// 10n + 5n      // works
// Number values above Number.MAX_SAFE_INTEGER can lose precision.

// Random integer from min through max, inclusive:
// C++: rand() % (max - min + 1) + min;
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInteger(1, 6)); // a number from 1 through 6


// ============================================================
// Quick C++ to JavaScript reference
// ============================================================

// vector.size()          -> array.length
// max(a, b)              -> Math.max(a, b)
// min(a, b)              -> Math.min(a, b)
// abs(x)                 -> Math.abs(x)
// sort(begin, end)       -> array.sort((a, b) => a - b)
// find(...)              -> array.includes(value) or array.indexOf(value)
// push_back(value)       -> array.push(value)
// pop_back()             -> array.pop()
// reverse(begin, end)    -> array.reverse()
// stoi(text)             -> Number(text) or parseInt(text, 10)
// to_string(value)       -> String(value)