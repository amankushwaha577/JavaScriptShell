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