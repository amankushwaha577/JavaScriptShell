



// 7. Empty Objects and Arrays
console.log([] == 0);        // true
console.log({} == 0);        // false
console.log([] == ![]);      // true

// Explanation:
// [] == 0:
// The empty array is coerced to an empty string (""), which is then coerced to 0.

// {} == 0:
// Objects are not coerced into numbers, so the result is false.

// [] == ![]:
// ![] evaluates to false( Since [] is truthy, applying ! flips it to false.)
// [] == false becomes [] == 0, and the empty array is coerced to 0, so the result is true.




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




// 14. Double Negatives
console.log(![] == []);  // true
console.log(![] == 0);   // true

// Explanation:
// ![] == []:
// A. [] (an empty array) is truthy, so applying ! (logical NOT) makes it false,
//    now=> false == []
// B. When comparing a boolean (false) with an object (like []), JavaScript converts the boolean to a number: false is coerced to 0.
//    now=> 0 == []
// C. When comparing a number with an object (like []), JavaScript tries to convert the object to a primitive value.
//    For an empty array ([]), the primitive value is an empty string ('').
//    now=> 0 == ''
// D. When comparing a number and a string, JavaScript converts the string to a number. An empty string ('') is coerced to 0.
//    0 == 0 //true

// ![] == 0:
// ![] evaluates to false, which is coerced to 0, so the comparison is 0 == 0, which is true.





// Key Takeaways:
// == allows type coercion (can lead to unexpected results).
// === is stricter (preferred in most cases).
// Objects and arrays are compared by reference, not by value.
// Be cautious with type coercion and edge cases like NaN, null, undefined, and empty objects/arrays.

