console.log(+"5"); // Output: 5
/*
a. The unary + operator is used to **explicitly** convert a value to a number.
b. here, The unary + operator explicitly converts the string "5" to the number 5. */

/*
Input        |  output   |  Description
-------------|-----------|----------------------------------------
+"5"         |  5        |"5" (string) → 5 (number)
+"123.45"    |  123.45   | Converts a decimal string to a number
+"0"         |  0        | "0" (string) → 0 (number)
+"-10"       |  -10      | "-10" (string) → -10 (number)
+true        |  1        | true → 1
+false       |  0        | false → 0
+null        |  0        | null → 0
+undefined   |  NaN      | undefined → NaN (Not a Number)
+""          |  0        | Empty string ("") → 0
+"hello"     |  NaN      | "hello" is not a number, results in NaN
*/

/*
Q. Why console.log(+-4); Outputs -4
A. a. Unary + does nothing : + simply converts the operand into a number (but -4 is already a number, so nothing changes).
   b. Unary - negates the number : -4 remains -4 since there's no second negation.

   Note: Dont think like + will convert negative number into positive.
         + just convert operand into number.
         - negates the number.
*/


console.log(5 + undefined);  // Output?
// undefined cannot be converted into a meaningful number, so the result is NaN (Not-a-Number).
