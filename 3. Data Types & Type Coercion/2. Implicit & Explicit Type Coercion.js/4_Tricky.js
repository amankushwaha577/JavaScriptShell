console.log(true == "true"); // Output: false
// true is coerced to 1. 
// "true" remains a string. 
// Since 1 is not equal to "true", the result is false.

console.log(" \t\n" == 0); // Output: true
// " \t\n" (whitespace characters) is coerced to an empty string "",
//  which is then coerced to 0.

