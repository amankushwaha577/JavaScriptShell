/*
Que🔹. What are the different types of Map built-in methods in JavaScript?
Answer. JavaScript Map objects come with built-in methods that can be categorized as follows:


1. Creation and Initialization:
------------------------------
   a. new Map()                => Creates a new empty Map.
   b. new Map([[key, value]]) => Initializes a Map with key-value pairs.


2. Basic Operations:
--------------------
   a. set(key, value)   => Adds or updates the key with the given value.
   b. get(key)          => Returns the value for the given key (or undefined).
   c. has(key)          => Checks if a key exists (returns true/false).
   d. delete(key)       => Removes the key-value pair.
   e. clear()           => Removes all key-value pairs.
   f. size              => Property showing the number of elements.


3. Iteration Methods:
---------------------
   a. keys()            => Returns an iterator over keys.
   b. values()          => Returns an iterator over values.
   c. entries()         => Returns an iterator over [key, value] pairs.
   d. forEach(callback) => Executes a callback for each key-value pair.


4. Conversion:
--------------
   a. Object.entries(obj) => Can convert an object to a Map using new Map(Object.entries(obj))
   b. Array.from(map)     => Converts a Map to an array of [key, value] pairs.
   c. Object.fromEntries(map)     => Convert a Map to an Object


5. Notes:
---------
   - Keys in Map can be of any type (objects, functions, etc.).
   - Maintains insertion order of keys.
   - Differs from plain objects which only use strings or symbols as keys.
*/


/*
======================= 🔍 JavaScript: Object vs Map =======================

| Feature / Criteria           | Object                                    | Map                                        |
|------------------------------|-------------------------------------------|--------------------------------------------|
| 🔑 Key Types                | Only string or symbol                      | Any type (object, function, number, etc.)  |
| 🔁 Iteration Order          | Not guaranteed (insertion order since ES6) | Guaranteed insertion order                 |
| 🔄 Iteration Methods        | for...in, Object.keys/values/entries()     | .keys(), .values(), .entries(), forEach()  |
| ⚡ Performance (large data) | Slower for frequent add/remove             | Faster for dynamic key-value pairs         |
| 🧹 Cleaning All             | Manually with a loop                       | map.clear()                                |
| 📏 Size Property            | Object.keys(obj).length                    | .size property                             |
| 🧪 Key Existence Check      | "key" in obj                               | map.has(key)                               |
| 🗑️ Key Deletion             | delete obj.key                             | map.delete(key)                            |
| 🔒 Prototype Inheritance    | Inherits from Object.prototype             | No prototype by default                    |
| 👷 Use Case                 | Fixed/known data structure                 | Dynamic key-value pairs                    |


========================= ✅ When to Use What? =========================

| Use Case                         | Recommended Structure |
|----------------------------------|------------------------|
| Static config / JSON-like data   | Object                |
| Dynamic key-value storage        | Map                   |
| Keys are objects or functions    | Map                   |
| Need frequent insert/delete ops  | Map                   |
| Require simple key lookup        | Object                |


===================== 🔄 Example Comparison =====================

// Object
const obj = {};
obj["1"] = "one";
obj[2] = "two";       // key becomes "2" (converted to string)
console.log(obj);     // { '1': 'one', '2': 'two' }

// Map
const map = new Map();
map.set(1, "one");
map.set(2, "two");
console.log(map);     // Map(2) { 1 => 'one', 2 => 'two' }  ✅ Keys remain numbers

*/
