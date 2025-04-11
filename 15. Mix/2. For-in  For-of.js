/*
for...in vs for...of :
----------------------
    a. for...in: Iterates over enumerable keys of an object or array.
    b. for...of: Iterates over values of an iterable (e.g., arrays, strings, maps). */

// For Array :
const arr = [10, 20, 30];

for (const key in arr) {
    console.log(key); // Output: 0, 1, 2 (indexes)
}
for (const value of arr) {
    console.log(value); // Output: 10, 20, 30
}


// For Object :
const obj = { name: "Aman", age: 25, country: "Croatia" };

for (const key in obj) {
    console.log(key); // Output: "name", "age", "country"
}
for (const value of obj) { 
    console.log(value);  // TypeError: obj is not iterable
}
/*
Key Notes:
----------
    a. Use for...in for object key properties.
    b. Use for...of for array values, strings, maps, and sets. */


    
/*
for...of for Objects :
-----------------------
    Usage: Cannot be directly used with objects because objects are not iterable by default.
    If you attempt to use for...of with an object, it throws a TypeError. */

const obj2 = { name: "Aman", age: 25, country: "Croatia" };

// Iterate Over Keys:
for (const key of Object.keys(obj2)) {
    console.log(key); // Output: "name", "age", "country"
}

// Iterate Over Values:
for (const value of Object.values(obj2)) {
    console.log(value); // Output: "Aman", 25, "Croatia"
}

// Iterate Over Entries (Key-Value Pairs):
for (const [key, value] of Object.entries(obj2)) {
    console.log(key, value); 
    // Output: "name Aman", "age 25", "country Croatia"
}

