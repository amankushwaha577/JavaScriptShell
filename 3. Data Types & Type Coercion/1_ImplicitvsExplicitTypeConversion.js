// 1.Implicit (Type Coercion): JavaScript automatically converts one data type to another.
// 2.Explicit: The developer explicitly converts the data type.

console.log("5" - 3); // Output: 2
// A. "5" is a string. The - operator expects numeric operands, so "5" is implicitly coerced into the number 5.
// B.  5 - 3 = 2.

console.log("5" + 3); // Output: "53"
// A. The + operator is used for both addition and string concatenation. 
//    If one operand is a string, JavaScript coerces the other operand to a string.
// B. "5" + "3" = "53".


console.log(true + false); // Output: 1
// A. true is coerced to 1, and false to 0 when used in arithmetic operations.
// B. 1 + 0 = 1.

console.log(+"5"); // Output: 5
// The unary + operator explicitly converts the string "5" to the number 5.


console.log(5 + undefined);  // Output?
// undefined cannot be converted into a meaningful number, so the result is NaN (Not-a-Number).




