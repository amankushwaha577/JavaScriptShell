/*
Rules for == (Loose Equality) vs === (Strict Equality) :
--------------------------------------------------------
a. == (loose equality) allows type coercion (converts types before comparing).
b. === (strict equality) does not allow type coercion (compares both value & type).

Few Notes :
----------
1. NaN is not equal to any value, including itself.
2. typeof null is "object", but typeof undefined is "undefined".
3.   null   ==  undefined  =>  is true, 
   KuchNahi ==   kuchNahi

   null === undefined is false.
4.
*/


console.log(NaN === NaN); // Output: false
// NaN is not equal to itself. Use Number.isNaN() to check for NaN

console.log(typeof null); // Output: "object"
// This is a historical bug in JavaScript. 
// null is not actually an object but is still identified as one due to its type tag.

console.log(typeof undefined); // Output: "undefined"

console.log(null == undefined); // Output: true
// null and undefined are considered loosely equal when using ==.

console.log(null === undefined); // Output: false
// === checks for strict equality (no type coercion). 
// Since null and undefined are different types, the result is false.



console.log("5" == 5); // Output: true
// The == operator performs type coercion, 
// converting "5" to 5, so the comparison is 5 == 5.

console.log("5" === 5); // Output: false
// === does not perform type coercion, 
// so the string "5" and the number 5 are not strictly equal.

console.log([] == 0); // Output: true
// [] (empty array) is coerced to an empty string "", 
// which is then coerced to 0 for comparison with 0.

console.log([] == ""); // Output: true
// The empty array [] is coerced to an empty string ("") when compared with a string.
// Since both sides are now empty strings, the comparison "" == "" evaluates to true.



console.log(0 == false); // Output: true
// false is also coerced to 0, so the comparison is 0 == 0.

console.log("" == false); // Output: true
// "" (empty string) is a falsy value and is coerced to 0. 
// false is also coerced to 0, so the comparison is 0 == 0.

console.log(true == "true"); // Output: false
// true is coerced to 1. 
// "true" remains a string. 
// Since 1 is not equal to "true", the result is false.

console.log(" \t\n" == 0); // Output: true
// " \t\n" (whitespace characters) is coerced to an empty string "",
//  which is then coerced to 0.



console.log(Boolean(0));  // Output: false
console.log(Boolean(""));  // Output: false