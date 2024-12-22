console.log(true == "true"); // Output: false
// true is coerced to 1. 
// "true" remains a string. 
// Since 1 is not equal to "true", the result is false.

console.log(" \t\n" == 0); // Output: true
// " \t\n" (whitespace characters) is coerced to an empty string "",
//  which is then coerced to 0.

console.log([] + []); // Output: ""
// Both arrays are coerced to empty strings "", 
// so the result is string concatenation: "" + "" = "".

console.log([] + {}); // Output: "[object Object]"
// [] is coerced to an empty string "". 
// {} is coerced to a string using .toString(), resulting in "[object Object]".

console.log([] - {}); // Output: NaN
// Subtraction cannot be performed between an empty array and an object, so the result is NaN.
