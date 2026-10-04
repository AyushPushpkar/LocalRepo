// JavaScript DSA Basics: Arrays
// C++ equivalents are written directly above the JavaScript code.

// ============================================================
// 1. Creating an array
// ============================================================

// C++:
// vector<string> arr = {"Red", "Bomb"};
let arr = ["Red", "Bomb"];

console.log(arr);        // [ 'Red', 'Bomb' ]
console.log(arr.length); // 2


// ============================================================
// 2. Accessing elements
// ============================================================

// C++:
// cout << arr[0] << endl;
// cout << arr[1] << endl;
console.log(arr[0]); // Red
console.log(arr[1]); // Bomb

// JavaScript arrays are zero-indexed, just like C++ vectors.


// ============================================================
// 3. Updating an element
// ============================================================

// C++:
// arr[0] = "Green";
arr[0] = "Green";
console.log(arr); // [ 'Green', 'Bomb' ]


// ============================================================
// 4. Adding an element at the end
// ============================================================

// C++:
// arr.push_back("Chuck");
arr.push("Chuck");
console.log(arr); // [ 'Green', 'Bomb', 'Chuck' ]

// push() is the JavaScript equivalent of vector::push_back().


// ============================================================
// 5. Assigning beyond the current end
// ============================================================

// C++:
// vector<string> names = {"Red", "Bomb"};
let names = ["Red", "Bomb"];
names[2] = "Chuck";

console.log(names);        // [ 'Red', 'Bomb', 'Chuck' ]
console.log(names.length); // 3

// The direct C++ equivalent is:
// names.push_back("Chuck");
// A C++ vector does not normally allow names[2] = "Chuck"
// until index 2 exists. JavaScript expands the array automatically.


// ============================================================
// 6. Creating a hole in an array
// ============================================================

// C++:
// vector<int> values(4); // creates four positions initialized to 0
// values[3] = 40;
let values = new Array(4);
values[3] = 40;

console.log(values);        // [ <3 empty items>, 40 ]
console.log(values.length); // 4
console.log(values[0]);     // undefined

// JavaScript's new Array(4) creates holes, unlike vector<int>(4),
// which creates four actual values containing 0.


// ============================================================
// 7. Adding and removing from the end
// ============================================================

// C++:
// vector<int> stack;
// stack.push_back(10);
// stack.push_back(20);
// stack.pop_back();
let stack = [];
stack.push(10);
stack.push(20);
console.log(stack); // [ 10, 20 ]

let removed = stack.pop();
console.log(removed); // 20
console.log(stack);   // [ 10 ]

// push() and pop() make a JavaScript array work like a stack.


// ============================================================
// 8. Adding and removing from the beginning
// ============================================================

// C++:
// deque<int> queue;
// queue.push_back(10);
// queue.push_back(20);
// int first = queue.front();
// queue.pop_front();
let queue = [];
queue.push(10);
queue.push(20);

let first = queue[0];
queue.shift();
console.log(first); // 10
console.log(queue); // [ 20 ]

// shift() removes index 0, but it is O(n) because remaining elements
// must move left. Avoid shift() for large DSA queues.


// ============================================================
// 9. Efficient queue pattern
// ============================================================

// C++:
// queue<int> q;
// q.push(10);              // add 10
// q.push(20);              // add 20
// int front = q.front();   // read 10
// q.pop();                 // remove 10
// q.front();               // now reads 20
let efficientQueue = [];
let frontIndex = 0;

// q.push(10);              // add 10
efficientQueue.push(10);

// q.push(20);              // add 20
efficientQueue.push(20);

// int front = q.front();   // read 10
let front = efficientQueue[frontIndex];

// q.pop();                 // remove 10
frontIndex++;

// q.push(30);              // add 30
efficientQueue.push(30);

// q.front();               // now reads 20
let nextFront = efficientQueue[frontIndex];

console.log(front);     // 10
console.log(nextFront); // 20

// The JavaScript array still stores 10, but frontIndex means that
// 10 is no longer considered part of the active queue.
// Reading and advancing the front are O(1), like std::queue operations.


// ============================================================
// 10. Traversing an array
// ============================================================

// C++:
// vector<int> numbers = {10, 20, 30};
// for (int i = 0; i < numbers.size(); i++) {
//     cout << numbers[i] << endl;
// }
let numbers = [10, 20, 30];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// C++ range-based for loop:
// for (int value : numbers) {
//     cout << value << endl;
// }
for (const number of numbers) {
  console.log(number);
}


// ============================================================
// 11. Common array properties and methods
// ============================================================

// C++:
// numbers.size();
console.log(numbers.length); // 3

// C++:
// numbers.front();
// numbers.back();
console.log(numbers[0]);                 // 10
console.log(numbers[numbers.length - 1]); // 30

// C++:
// reverse(numbers.begin(), numbers.end());
numbers.reverse();
console.log(numbers); // [ 30, 20, 10 ]

// C++:
// sort(numbers.begin(), numbers.end());
numbers.sort((a, b) => a - b);
console.log(numbers); // [ 10, 20, 30 ]

// Important: JavaScript's default sort is lexicographic (dictionary order).
// Always use (a, b) => a - b for numeric ascending order.


// ============================================================
// 12. Removing an element by index
// ============================================================

// C++:
// numbers.erase(numbers.begin() + 1);
// Syntax:
// array.splice(start, deleteCount, item1, item2, ...);
//              ↑       ↑          ↑      ↑
//           where to  how many   elements to ADD
//           start     remove      (optional)

// Example:
let nums = [10, 20, 30];

numbers.splice(1, 1, 25, 27);
//             ↑  ↑  ↑   ↑
//             │  │  │   └── item2 → 27
//             │  │  └────── item1 → 25
//             │  └───────── delete 1 element
//             └──────────── start at index 1

console.log(nums); // [10, 25, 27, 30]

// splice(startIndex, deleteCount) changes the original array.
// This operation is O(n) because later elements shift left.


// ============================================================
// 13. Checking whether an element exists
// ============================================================

// C++:
// find(numbers.begin(), numbers.end(), 30) != numbers.end();
console.log(numbers.includes(30)); // true
console.log(numbers.includes(99)); // false

// includes() performs a linear search: O(n).


// ============================================================
// 14. Two-dimensional vector (matrix)
// ============================================================

// C++:
// vector<vector<int>> matrix;
// int rows = 2;
// int columns = 3;
// for (int i = 0; i < rows; i++) {
//     vector<int> row;
//     for (int j = 0; j < columns; j++) {
//         row.push_back(i * columns + j + 1);
//     }
//     matrix.push_back(row);
// }
let matrix = [];
let rows = 2;
let columns = 3;

for (let i = 0; i < rows; i++) {
  let row = [];
  for (let j = 0; j < columns; j++) {
    row.push(i * columns + j + 1);
  }
  matrix.push(row);
}

console.log(matrix); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

// C++:
// cout << matrix[1][2] << endl;
console.log(matrix[1][2]); // 6

// A 2D vector is a vector whose elements are themselves vectors.
// A JavaScript 2D array is an array whose elements are themselves arrays.

// C++ nested traversal:
// for (int i = 0; i < matrix.size(); i++) {
//     for (int j = 0; j < matrix[i].size(); j++) {
//         cout << matrix[i][j] << " ";
//     }
// }
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

// C++:
// int n = 3;
// vector<vector<int>> initializedMatrix(n, vector<int>(n, -1));
let n = 3;
let initializedMatrix = Array.from(
  { length: n },
  () => new Array(n).fill(-1),
);

let init = Array.from({len : n} , () => new Array(n).fill(-1)) ; 

console.log(initializedMatrix);
// [ [ -1, -1, -1 ], [ -1, -1, -1 ], [ -1, -1, -1 ] ]

// Array.from creates a separate row each time, matching C++'s
// vector<vector<int>>(n, vector<int>(n, -1)).


// ============================================================
// Quick C++ to JavaScript reference
// ============================================================

// vector<int> v;                 -> let v = [];
// v.push_back(x);                -> v.push(x);
// v.pop_back();                  -> v.pop();
// v.size();                      -> v.length;
// v[i];                          -> v[i];
// v.front();                     -> v[0];
// v.back();                      -> v[v.length - 1];
// reverse(v.begin(), v.end());  -> v.reverse();
// sort(v.begin(), v.end());     -> v.sort((a, b) => a - b);
// find(...)                     -> v.includes(x) or a loop
// vector<vector<int>> matrix;   -> let matrix = [];
// matrix.push_back(row);        -> matrix.push(row);
// matrix[i][j];                 -> matrix[i][j];
// vector<vector<int>>(n,       -> Array.from({length: n},
// vector<int>(n, -1));            () => new Array(n).fill(-1));
