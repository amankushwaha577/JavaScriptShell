// 1.Implicit (Type Coercion): JavaScript automatically converts one data type to another.
// 2.Explicit: The developer explicitly converts the data type.

console.log("5" - 3); // Output: 2
/*
a. The - operator expects numeric operands.
b. "5" is a string. so "5" is implicitly coerced into the number 5.
c.  5 - 3 = 2.  */


console.log("5" + 3); // Output: "53"
/*
A. The + operator is used for both addition and string concatenation. 
   If any one of the operand is a string, JavaScript coerces the other operand to a string.
B. "5" + "3" = "53". 
    
    Note : If both were number result would be number.*/


console.log(true + false); // Output: 1
/* 
a. When performing arithmetic operations (+, -, *, /), Boolean values are automatically coerced to numbers.
b. true is coerced to 1, and false to 0 when used in arithmetic operations.
c. 1 + 0 = 1. */






