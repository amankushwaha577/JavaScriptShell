/* 
========================= JavaScript String Built-in Methods =========================

/*
3️⃣ String Extraction Methods:   end = end -1
-------------------------------    
1. slice(start, end)      → Extracts a section of the string.                    "hello".slice(1, 4);        // "ell"
2. substring(start, end)  → Similar to `slice()`, but no negative indices.       "hello".substring(1, 4);    // "ell"
3. substr(start, length)  → Extracts part of a string based on length.           "hello".substr(1, 3);       // "ell"  deprecated 

Slice() vs substring() :
a. If we skip 2nd parameter, In Both methods => endIndex = length
a. slice supports -v indexes. | substring converts -v index to 0.
b. if start > end index => slice retuns "" | substring swaps the indexes.  */


/*
Q1❓ What if you call slice() | substring() with only one parameter?
Ans. It extracts from the given start index to the end of the string. */
        "hello".slice(2); // "llo"
        "hello".substring(2); // "llo"

/*
Q2❓ What happens if slice() has an end index smaller than the start index?
Ans. It returns an empty string. 
     if start > end index => slice retuns "" | substring swaps the indexes. */
        "hello".slice(4, 2);      // ""
        "hello".substring(4, 2); // "ll"

/*
Q3❓  What is the difference between slice(), substring(), and substr()?
Ans.  All are used to Extracts part of a string. 

     1. slice(start, end) : → Supports negative indices.
     ----------------------
               
                01234567
     let str = "amankush"; 
                87654321

     let a = str.slice(1, 4);      -> "man"
     let b = str.slice(-4, -1);    -> "kus"

     2. substring(start, end) : Doesn't support negative indices | substring() treats negative indices as 0
     --------------------------

     let c = str.substring(1, 4);     -> "man"
     let d = str.substring(-4, -1);   ->  returns ""  | "" (treated as substring(0,0))

     3. substr(start, length) : Extracts based on length (Deprecated)  
     -------------------------

     let e = str.substr(1, 4);      // 'mank'
*/


/*
=========================================Real World=======================================
/*
❓ Q2: How does substr() differ from slice() and substring()?
Answer. It's Deprecated.
*/

/*
❓ Q3: How can you extract the last 3 characters of a string dynamically?
*/
let str2 = "programming";
let lastThree = str2.slice(-3);
console.log(lastThree); // "ing"

/*
❓ Q4: What happens if end index < start index in substring()?
*/
console.log("abcdef".substring(4, 2));  // "cd" (Automatically swaps indices)
console.log("abcdef".slice(4, 2));      // ""   (Returns an empty string)

/*
❓ Q5: How do you safely extract a substring without knowing the string length?
*/
let dynamicText = "Dynamic Extraction";
let extracted = dynamicText.slice(8);  // Extract from index 8 to end
console.log(extracted); // "Extraction"
