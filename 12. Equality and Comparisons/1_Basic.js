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




