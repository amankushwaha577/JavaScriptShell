/* 
========================= JavaScript String Built-in Methods =========================

String is Immutable can't change.

1️⃣ String Manipulation Methods:
---------------------------------
1. toUpperCase()  → Converts string to uppercase.                     "hello".toUpperCase();              // "HELLO"
   toLowerCase()  → Converts string to lowercase.                     "HELLO".toLowerCase();              // "hello

2. trim()       → Removes whitespace from both ends.               "  hello  ".trim();                     // "hello"
   trimStart()  → Removes whitespace from the start.               "  hello  ".trimStart();                // "hello  "
   trimEnd()  →   Removes whitespace from the end.                 "  hello  ".trimEnd();                  // "  hello"

3. replace(search, replaceWith)     → Replaces first match.        "aman aman".replace("am", "x");          // 'xan aman'
   replaceAll(search, replaceWith)  → Replaces all occurrences.    "aman aman".replaceAll("hello", "hi");   // "hi hi"    */


/*
Q1❓. What’s the difference between replace() and replaceAll()?
Ans.  1. replace(search, newValue): Replaces only the first occurrence.
      2. replaceAll(search, newValue): Replaces all occurrences.  */

        "hello hello".replace("hello", "hi"); // "hi hello"
        "hello hello".replaceAll("hello", "hi"); // "hi hi"


/*
Q2❓. What happens when replace() is given a substring that doesn’t exist?
Ans.   It simply returns the original string. */

      "hello".replace("z", "y"); // "hello"


/*
=============================================Real World===============================================
Q1❓. How can you compare two strings case-insensitively?
*/
let str1 = "Hello";
let str2 = "hello";

let isSame = str1.toLowerCase() === str2.toLowerCase(); 
console.log(isSame); // true

/*
Q2❓. Convert only the first letter of a string to uppercase.
*/
let str3 = "javascript";
let capitalized = str3[0].toUpperCase() + str3.slice(1);
console.log(capitalized); // "Javascript"


/*
Q3❓. Why might you use trim() before comparing user input?
*/
let userInput = "  hello  ";
let expected = "hello";

console.log(userInput === expected);          // false
console.log(userInput.trim() === expected);   // true


/*
Q4❓. Why might trimStart() be useful in a form validation?
*/
let password = "  password123"; 
console.log(password.trimStart()); // "password123" (removes leading space but keeps trailing spaces)

