







// 8. Comparing Functions
function a() {}
function b() {}

console.log(a == b);   // false
console.log(a === b);  // false

// Explanation:
// Functions, like objects, are compared by reference.
// a and b are two different instances, so they are not equal.



// 10. Objects Converted to Strings
const obj = { a: 1 };
console.log(obj == "[object Object]");  // true

// Explanation:
// When comparing an object to a string, the object is coerced to its string representation using .toString(), 
// which for most objects is "[object Object]".



// 12. +0 and -0
console.log(+0 === -0);  // true
console.log(Object.is(+0, -0)); // false

// Explanation:
// +0 === -0:
// In JavaScript, +0 and -0 are considered equal in == and ===.

// Object.is(+0, -0):
// Object.is is stricter and can distinguish between +0 and -0.




// 13. Primitive Wrappers
console.log(new String("test") == "test");  // true
console.log(new String("test") === "test"); // false

// Explanation:
// ==: The string object is coerced to its primitive value ("test"), so the comparison is true.
// ===: Strict equality fails because one is an object and the other is a string.


