/* 
========================= JavaScript String Built-in Methods =========================

5️⃣ Other Few :
--------------

1. repeat(n) : Repeats the string `n` times.
-------------  "hi".repeat(3);   // "hihihi"
  
2. charAt(index) vs at(index) : Both return a single character as a string.
------------------------------
   a. charAt() does't and retuns "" | at() supports -ve index. 
   b. For out of range index => charAt() returns ""  | at () returns undefined
   c. Both methods are efficient, but `charAt()` is more widely supported in older browsers.
*/

/*
❓ Q1: What is the difference between at() and charAt()?
*/
let str = "JavaScript";

console.log(str.charAt(2)); // "v"
console.log(str.at(2));     // "v"

/*
❓ Q2: Which method supports negative indexing?
*/
console.log(str.charAt(-1)); // "" (empty string)
console.log(str.at(-1));     // "t"

/*
❓ Q3: What happens if the index is out of range?
*/
console.log(str.charAt(50)); // "" (empty string)
console.log(str.at(50));     // undefined

/*
❓ Q4: Why might at() be preferable over charAt()?
*/
// When accessing the last character of a string:
console.log(str.at(-1)); // "t" (easier than str[str.length - 1])
console.log(str.charAt(str.length - 1)); // "t"

/*
❓ Q5: How can you safely get a character from a string, even if the index is negative?
*/
let index = -3;
let safeChar = str.at(index) || "Out of range";
console.log(safeChar); // "i" (if index exists), otherwise "Out of range"



/*
3. concat() :  
-------------
   a. `concat()` merges two or more strings and returns a **new string**.
   b.  It does **not** modify the original strings.

   Syntax:
   let newString = str1.concat(str2, str3, ...);

   Example:
   let str1 = "Hello";
   let str2 = " World";
   let result = str1.concat(str2);
   console.log(result); // "Hello World"

   a. Does not modify original strings:
      console.log(str1); // "Hello"
      console.log(str2); // " World"

   b. Works with multiple strings:
      let greeting = "Hi".concat(", ", "John", "!");
      console.log(greeting); // "Hi, John!"

   c. Works with empty strings:
      console.log("".concat("Hello")); // "Hello"

📌Performance Consideration:
   - `concat()` is **slower** than using `+` in most cases.

     let str = "Hello";
     let newStr = str + " World";       // Faster
     let newStr2 = str.concat(" World"); // Slower
*/

