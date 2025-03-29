console.log(NaN === NaN); // Output: false
// NaN is not equal to itself. Use Number.isNaN() to check for NaN

console.log(typeof null); // Output: "object"
// This is a historical bug in JavaScript. 
// null is not actually an object but is still identified as one due to its type tag.



console.log(0 == false); // Output: true
// 0 is a falsy value, so it is loosely equal to false in type coercion.

console.log("" == false); // Output: true
// "" (empty string) is a falsy value and is coerced to 0. 
// false is also coerced to 0, so the comparison is 0 == 0.

console.log(Boolean(0));  // Output: false
console.log(Boolean(""));  // Output: false





// ----------------------------------------
// 1. NaN is not equal to any value, including itself.
// 2. typeof null is "object", but typeof undefined is "undefined".

