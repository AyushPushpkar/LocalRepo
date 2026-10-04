// JavaScript DSA Basics: Map and Set
// C++ equivalents are written directly above the JavaScript code.

// ============================================================
// 1. Map: key-value pairs
// ============================================================

// C++:
// unordered_map<string, int> scores;
// scores["Ayush"] = 95;
// scores["Riya"] = 88;
let scores = new Map();
scores.set("Ayush", 95);
scores.set("Riya", 88);

console.log(scores); // Map(2) { 'Ayush' => 95, 'Riya' => 88 }

// Map stores a key together with a value, like map or unordered_map.
// set(key, value) inserts a new pair or updates an existing key.


// ============================================================
// 2. Reading a value
// ============================================================

// C++:
// cout << scores["Ayush"] << endl;
console.log(scores.get("Ayush")); // 95

scores.set("Ayush", scores.get("Ayush") + 1); // ++
scores.set("Ayush", scores.get("Ayush") - 1); // --

// JavaScript Map uses get(key) to read a value.


// ============================================================
// 3. Checking whether a key exists
// ============================================================

// C++:
// scores.find("Ayush") != scores.end();
console.log(scores.has("Ayush")); // true
console.log(scores.has("Sam"));   // false

// has(key) is the JavaScript equivalent of checking find() against end().


// ============================================================
// 4. Updating and deleting a key
// ============================================================

// C++:
// scores["Ayush"] = 99;
// scores.erase("Riya");
scores.set("Ayush", 99);
scores.delete("Riya");

console.log(scores.get("Ayush")); // 99
console.log(scores.has("Riya"));  // false

// delete(key) returns true if an entry was removed.


// ============================================================
// 5. Map size and traversal
// ============================================================

// C++:
// cout << scores.size() << endl;
// for (auto [name, score] : scores) {
//     cout << name << " " << score << endl;
// }
console.log(scores.size); // 1

for (const [name, score] of scores) {
  console.log(name, score);
}

// Map entries are iterated as [key, value] pairs.


// ============================================================
// 6. Set: unique values
// ============================================================

// C++:
// unordered_set<int> uniqueNumbers;
// uniqueNumbers.insert(10);
// uniqueNumbers.insert(20);
// uniqueNumbers.insert(10); // duplicate is ignored
let uniqueNumbers = new Set();
uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(10); // duplicate is ignored

console.log(uniqueNumbers); // Set(2) { 10, 20 }

// A Set stores each value only once, like set or unordered_set.


// ============================================================
// 7. Checking, deleting, and measuring a Set
// ============================================================

// C++:
// uniqueNumbers.find(20) != uniqueNumbers.end();
// uniqueNumbers.erase(10);
// cout << uniqueNumbers.size() << endl;
console.log(uniqueNumbers.has(20)); // true
uniqueNumbers.delete(10);
console.log(uniqueNumbers.size);     // 1

// Set has() is an average O(1) lookup, like unordered_set.


// ============================================================
// 8. Constructing a Set from an array
// ============================================================

// C++:
// vector<int> values = {1, 2, 2, 3, 3, 3};
// unordered_set<int> uniqueValues(values.begin(), values.end());
let values = [1, 2, 2, 3, 3, 3];
let uniqueValues = new Set(values);

console.log(uniqueValues); // Set(3) { 1, 2, 3 }

// Convert a Set back to an array:
// C++: vector<int> result(uniqueValues.begin(), uniqueValues.end());
let result = [...uniqueValues];
console.log(result); // [ 1, 2, 3 ]


// ============================================================
// Quick C++ to JavaScript reference
// ============================================================

// unordered_map<K, V>       -> new Map()
// mp[key] = value;          -> mp.set(key, value)
// mp[key]                    -> mp.get(key)
// mp.find(key)               -> mp.has(key)
// mp.erase(key)              -> mp.delete(key)
// mp.size()                  -> mp.size
// unordered_set<T>           -> new Set()
// st.insert(value)           -> st.add(value)
// st.find(value)             -> st.has(value)
// st.erase(value)            -> st.delete(value)
// st.size()                  -> st.size
