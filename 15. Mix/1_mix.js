// 1. typeof Quirks :
// The typeof operator returns a string indicating the type of its operand. While straightforward, it has quirks:

console.log(typeof null); // "object" (quirk)
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"
console.log(typeof NaN); // "number" (quirk)

// Key Notes:
// A. null returns "object" because of a historical bug in JavaScript.
// B. Arrays return "object", not "array". Use Array.isArray([]) for arrays.
// C. typeof NaN is "number", though it means "Not-a-Number".



// 2. for...in vs for...of
// for...in: Iterates over enumerable keys of an object or array.
// for...of: Iterates over values of an iterable (e.g., arrays, strings, maps).

const arr = [10, 20, 30];

for (const key in arr) {
    console.log(key); // Output: 0, 1, 2 (indexes)
}
for (const value of arr) {
    console.log(value); // Output: 10, 20, 30
}


const obj = { name: "Aman", age: 25, country: "Croatia" };

for (const key in obj) {
    console.log(key); // Output: "name", "age", "country"
}
for (const value of obj) { 
    console.log(value);  // TypeError: obj is not iterable
}

// Key Notes:
// Use for...in for object properties.
// Use for...of for array values, strings, maps, and sets.


// for...of for Objects :
// -----------------------
// Usage: Cannot be directly used with objects because objects are not iterable by default.
// If you attempt to use for...of with an object, it throws a TypeError.

const obj2 = { name: "Aman", age: 25, country: "Croatia" };

for (const key of Object.keys(obj2)) {
    console.log(key); // Output: "name", "age", "country"
}