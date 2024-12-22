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