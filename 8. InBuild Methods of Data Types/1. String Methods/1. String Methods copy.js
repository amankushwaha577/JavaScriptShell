/* 
========================= JavaScript String Built-in Methods =========================

1️⃣ String Manipulation Methods:
---------------------------------
1. toUpperCase()  → Converts string to uppercase.                     "hello".toUpperCase();              // "HELLO"
   toLowerCase()  → Converts string to lowercase.                     "HELLO".toLowerCase();              // "hello

2. trim()       → Removes whitespace from both ends.               "  hello  ".trim();                     // "hello"
   trimStart()  → Removes whitespace from the start.               "  hello  ".trimStart();                // "hello  "
   trimEnd()  →   Removes whitespace from the end.                 "  hello  ".trimEnd();                  // "  hello"

3. replace(search, replaceWith)     → Replaces first match.        "aman aman".replace("am", "x");          // 'xan aman'
   replaceAll(search, replaceWith)  → Replaces all occurrences.    "aman aman".replaceAll("hello", "hi");   // "hi hi"


    Q❓. What’s the difference between replace() and replaceAll()?
    Ans. 1. replace(search, newValue): Replaces only the first occurrence.
         2. replaceAll(search, newValue): Replaces all occurrences. */

        "hello hello".replace("hello", "hi"); // "hi hello"
        "hello hello".replaceAll("hello", "hi"); // "hi hi"


/*
2️⃣ String Search Methods:
---------------------------                                                         01234
1.  indexOf(search)      → Returns the index of the first occurrence.              "hello".indexOf("l");       // 2
    lastIndexOf(search)  → Returns the index of the last occurrence.               "hello".lastIndexOf("l");   // 3

2.  includes(substring)  → Checks if the string contains a substring.              "hello".includes("he");     // true

3.  startsWith(prefix)  → Checks if the string starts with a given substring.      "hello".startsWith("he");   // true
    endsWith(suffix)    → Checks if the string ends with a given substring.        "hello".endsWith("lo");     // true


    Q❓. How does indexOf() differ from includes()?
    Ans. 1. indexOf(substring):  Returns the first occurrence index or -1 if not found.
         2. includes(substring): Returns true or false depending on whether the substring exists.

         */


         "hello".indexOf("l");  // 2
         "hello".includes("l"); // true





/*
3️⃣ String Extraction Methods:   end = end -1
-------------------------------    
1. slice(start, end)      → Extracts a section of the string.                    "hello".slice(1, 4);        // "ell"
2. substring(start, end)  → Similar to `slice()`, but no negative indices.       "hello".substring(1, 4);    // "ell"
3. substr(start, length)  → Extracts part of a string based on length.           "hello".substr(1, 3);       // "ell"  deprecated



4️⃣ String Splitting & Joining:
--------------------------------
1. split(delimiter)  → Splits a string into an array.                        "hello world".split(" ");   // ["hello", "world"]
2. join(delimiter)  → Joins array elements into a string.               ["hello", "world"].join(" ");   // "hello world"


5️⃣ String Repeating & Padding:
--------------------------------
🔹 repeat(n)  → Repeats the string `n` times.
    "hi".repeat(3);   // "hihihi"

🔹 padStart(targetLength, padString)  → Pads the string at the start.
    "5".padStart(3, "0");   // "005"

🔹 padEnd(targetLength, padString)  → Pads the string at the end.
    "5".padEnd(3, "0");   // "500"

====================================================================================
*/

