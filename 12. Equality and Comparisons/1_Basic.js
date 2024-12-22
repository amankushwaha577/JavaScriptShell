// 1. Difference Between == and ===
console.log(1 == "1");   // true
console.log(1 === "1");  // false

// Explanation:
// == (Loose Equality):
// -----------------------
// Converts both values to the same type (type coercion).
// "1" (string) is converted to 1 (number), and the comparison becomes 1 == 1, which is true.

// === (Strict Equality):
// ------------------------
// Compares values without any type conversion.
// 1 (number) is not equal to "1" (string), so the result is false.



// 2. null and undefined Comparisons
console.log(null == undefined);  // true // important **
console.log(null === undefined); // false
console.log(null == 0);          // false

// Explanation:
// null == undefined:
// ------------------
// null and undefined are loosely equal due to special rules in ==.
// "Note" ==> According to JavaScript's specification, null is loosely equal to undefined. This is a special exception for these two values.
// "No type conversion is needed in this case".

// null === undefined:
// -------------------
// The === operator is a strict equality check that does not allow type coercion.
// Strict equality checks type and value.
// Since null and undefined are different types, the result is false.

// null == 0:
// --------------
// "Note" ==> According to JavaScript's specification, null is only loosely equal to undefined and no other value (not even 0).





// 3. Quirks with NaN
console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false
console.log(Number.isNaN(NaN)); // true

// Explanation:
// NaN == NaN and NaN === NaN:
// By specification (IEEE 754), NaN (Not a Number) is not equal to anything, even itself.

// Number.isNaN(NaN):
// This method correctly checks if a value is NaN.




// 4. Comparing Objects
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 == obj2);  // false
console.log(obj1 === obj2); // false

// Explanation:
// Objects are compared by reference, not by value.
// Even if obj1 and obj2 have the same content, they are stored in different memory locations, so their references are not equal.




// 5. Comparing Arrays
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 == arr2);  // false
console.log(arr1 === arr2); // false
console.log(arr1.toString() === arr2.toString()); // true

// Explanation:
// arr1 == arr2 and arr1 === arr2:
// Arrays, like objects, are compared by reference.
// Since arr1 and arr2 are different instances, their references are not equal.

// arr1.toString() === arr2.toString():
// The .toString() method converts arrays to comma-separated strings, so arr1 and arr2 become "1,2,3", which are equal.




// 6. Weirdness with 0 and false
console.log(0 == false);   // true
console.log(0 === false);  // false
console.log("0" == false); // true

// Explanation:
// 0 == false:
// false is coerced to 0, so the comparison becomes 0 == 0, which is true.

// 0 === false:
// Strict equality checks both type and value.
// 0 (number) is not equal to false (boolean), so the result is false.

// "0" == false:
// "0" is coerced to a number (0), and false is coerced to 0, so the comparison becomes 0 == 0, which is true.




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




// 9. true and Strings
console.log(true == "1");  // true
console.log(true === "1"); // false
console.log(true == "true"); // false

// Explanation:
// true == "1":
// true is coerced to 1, and "1" is coerced to 1, so the comparison becomes 1 == 1, which is true.

// true === "1":
// Strict equality fails because their types are different.

// true == "true":
// "true" is a string and cannot be coerced into 1, so the result is false.




// 10. Objects Converted to Strings
const obj = { a: 1 };
console.log(obj == "[object Object]");  // true

// Explanation:
// When comparing an object to a string, the object is coerced to its string representation using .toString(), 
// which for most objects is "[object Object]".




// 11. Comparing Infinity
console.log(Infinity == Infinity);  // true
console.log(Infinity === Infinity); // true

// Explanation:
// Infinity is a special numeric value that is equal to itself, even in strict equality.




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