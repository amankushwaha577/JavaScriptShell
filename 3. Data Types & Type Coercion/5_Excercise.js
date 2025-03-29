console.log(1 < 2 < 3); // Output: true
// Explanation:
// -------------
// 1. JavaScript evaluates the expression from left to right due to operator associativity.
// 2. First, 1 < 2 is evaluated, resulting in true.
// 3. Next, the result true is coerced to 1 (since true is treated as 1 in numeric contexts).
// 4. The expression becomes 1 < 3, which is true.

console.log(3 > 2 > 1); // Output: false
// Explanation:
// -------------
// The expression is evaluated from left to right.
// First, 3 > 2 is evaluated, resulting in true.
// Next, true is coerced to 1 (since true is treated as 1 in numeric contexts).
// The expression becomes 1 > 1, which is false.





// Summary of Key Concepts:
// Left-to-Right Evaluation: Relational operators like < and > are evaluated from left to right.
// Type Coercion: JavaScript often converts values to strings, numbers, or booleans depending on the operator.
// Empty Arrays: When used in arithmetic or string contexts, [] is coerced to an empty string.
// Boolean to Number: true is coerced to 1, and false to 0 in numeric contexts.