/* 
========================= JavaScript String Built-in Methods =========================

5️⃣ String Repeating:
--------------------------------
🔹 repeat(n)  → Repeats the string `n` times.
    "hi".repeat(3);   // "hihihi"

====================================================================================
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
🔍 **at() vs charAt() – Key Differences & Use Cases**

📌 1️⃣ Negative Indexing Support:
--------------------------------
   - `charAt()` ❌ does NOT support negative indices.
   - `at()` ✅ supports negative indices (useful for accessing characters from the end).

   let str = "JavaScript";

   console.log(str.charAt(-1)); // "" (empty string)
   console.log(str.at(-1));     // "t" (supports negative indexing)

📌 2️⃣ Behavior on Out-of-Range Index:
---------------------------------------
   - `charAt()` returns an empty string ("").
   - `at()` returns `undefined`.

   console.log(str.charAt(50)); // ""  (empty string)
   console.log(str.at(50));     // undefined

📌 3️⃣ Readability & Use Cases:
--------------------------------
   - `charAt()` requires extra steps to access the last character.
   - `at()` makes it easier.

   console.log(str.charAt(str.length - 1)); // "t" (Extra calculation)
   console.log(str.at(-1)); // "t" (Simple & clean)

📌 4️⃣ Return Type:
--------------------
   - Both return a single character as a string.

   console.log(typeof str.charAt(2)); // "string"
   console.log(typeof str.at(2));     // "string"

📌 5️⃣ Performance:
--------------------
   - Both methods are efficient, but `charAt()` is more widely supported in older browsers.

📌 6️⃣ Browser Support:
------------------------
   - `charAt()` ✅ Works in all browsers.
   - `at()` ❌ Not supported in older browsers (introduced in ES2022).

📌 **When to Use What?**
-------------------------
✔ Use `charAt()` for **maximum browser compatibility**.  
✔ Use `at()` when **negative indexing is useful** and if you're working in modern JavaScript environments.
*/



/*
🔍 **concat() Method – Overview & Key Points**
-------------------------------------------------
📌 1️⃣ Definition:
   - `concat()` merges two or more strings and returns a **new string**.
   - It does **not** modify the original strings.

📌 2️⃣ Syntax:
   let newString = str1.concat(str2, str3, ...);

📌 3️⃣ Example:
   let str1 = "Hello";
   let str2 = " World";
   let result = str1.concat(str2);
   console.log(result); // "Hello World"

📌 4️⃣ Does not modify original strings:
   console.log(str1); // "Hello"
   console.log(str2); // " World"

📌 5️⃣ Works with multiple strings:
   let greeting = "Hi".concat(", ", "John", "!");
   console.log(greeting); // "Hi, John!"

📌 6️⃣ Works with empty strings:
   console.log("".concat("Hello")); // "Hello"

📌 7️⃣ Performance Consideration:
   - `concat()` is **slower** than using `+` in most cases.
   - Example:
     let str = "Hello";
     let newStr = str + " World";  // Faster
     let newStr2 = str.concat(" World"); // Slower

📌 8️⃣ When to use `concat()` instead of `+`?
   - When concatenating **multiple strings** dynamically.
   - When using a **functional programming approach**.

*/

