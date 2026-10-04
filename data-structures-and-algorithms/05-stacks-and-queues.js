// JavaScript DSA Basics: Stack and Queue
// C++ equivalents are written directly above the JavaScript code.

// ============================================================
// 1. Stack: last in, first out
// ============================================================

// C++:
// stack<int> st;
// st.push(10);
// st.push(20);
// int top = st.top();
// st.pop();
let stack = [];
stack.push(10);
stack.push(20);
let top = stack[stack.length - 1];
stack.pop();

console.log(top);   // 20
console.log(stack); // [ 10 ]

// push() is like stack::push().
// stack[stack.length - 1] is like stack::top().
// pop() removes the last element, like stack::pop().


// ============================================================
// 2. Stack with a helper function
// ============================================================

// C++:
// stack<int> st;
// st.push(5);
// st.push(8);
// cout << st.top() << endl;
// st.pop();
let stackExample = [];
stackExample.push(5);
stackExample.push(8);
console.log(stackExample[stackExample.length - 1]); // 8
stackExample.pop();


// ============================================================
// 3. Queue: first in, first out
// ============================================================

// C++:
// queue<int> q;
// q.push(10);
// q.push(20);
// int front = q.front();
// q.pop();
let queue = [];
queue.push(10);
queue.push(20);
let front = queue[0];
queue.shift();

console.log(front); // 10
console.log(queue); // [ 20 ]

// push() is like queue::push().
// queue[0] is like queue::front().
// shift() is like queue::pop(), but shift() is O(n).


// ============================================================
// 4. Efficient queue using a front index
// ============================================================

// C++:
// queue<int> q;
// q.push(10);
// q.push(20);
// int front = q.front();
// q.pop();
// int nextFront = q.front();
let efficientQueue = [];
let frontIndex = 0;

efficientQueue.push(10);
efficientQueue.push(20);

let efficientFront = efficientQueue[frontIndex];
frontIndex++;
let nextFront = efficientQueue[frontIndex];

console.log(efficientFront); // 10
console.log(nextFront);      // 20

// The old front remains in the array physically, but frontIndex makes
// it inactive logically. Reading and advancing are both O(1).


// ============================================================
// 5. Queue operations with a helper function
// ============================================================

// C++:
// queue<int> q;
// q.push(100);
// q.push(200);
// while (!q.empty()) {
//     cout << q.front() << endl;
//     q.pop();
// }
let processQueue = [100, 200];
let processFront = 0;

while (processFront < processQueue.length) {
  console.log(processQueue[processFront]);
  processFront++;
}

// For a large queue, periodically removing processed items can reclaim
// memory, but do not shift on every operation.


// ============================================================
// 6. Empty checks
// ============================================================

// C++:
// st.empty();
console.log(stack.length === 0); // false

// C++:
// q.empty();
console.log(queue.length === 0); // false

// For an indexed queue, check the active range:
// C++: q.empty();
console.log(frontIndex >= efficientQueue.length); // false


// ============================================================
// Quick C++ to JavaScript reference
// ============================================================

// stack<int> st;              -> let st = [];
// st.push(value);             -> st.push(value);
// st.top();                   -> st[st.length - 1]
// st.pop();                   -> st.pop();
// st.empty();                 -> st.length === 0
// queue<int> q;               -> let q = [];
// q.push(value);              -> q.push(value);
// q.front();                  -> q[frontIndex]
// q.pop();                    -> frontIndex++
// q.empty();                  -> frontIndex >= q.length
