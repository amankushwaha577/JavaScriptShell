/* 
========================= JavaScript String Built-in Methods =========================

2️⃣ String Search Methods:
---------------------------                                                         01234
1.  indexOf(search)      → Returns the index of the first occurrence.              "hello".indexOf("l");       // 2
    lastIndexOf(search)  → Returns the index of the last occurrence.               "hello".lastIndexOf("l");   // 3

2.  includes(substring)  → Checks if the string contains a substring.              "hello".includes("he");     // true

3.  startsWith(prefix)  → Checks if the string starts with a given substring.      "hello".startsWith("he");   // true
    endsWith(suffix)    → Checks if the string ends with a given substring.        "hello".endsWith("lo");     // true 
    
    Note : All accept an optional starting position parameter.*/

/*
Q1❓. How does indexOf() differ from includes()?
Ans.  1. indexOf(substring):  Returns the first occurrence index or -1 if not found.
      2. includes(substring): Returns true or false depending on whether the substring exists.  */

         "hello".indexOf("l");  // 2
         "hello".includes("l"); // true

         indexOf(search) 
/*
Q2❓. indexOf() Example with Start Position vs lastIndexOf() Example with Start Position ?
Ans.  Index:  0  1  2  3  4  5  6  7  8  9 10
      String: h  e  l  l  o     w  o  r  l  d

        lastIndexOf("o", 6) :
        --------------------
        a. "o" → We are looking for the letter "o".
        b. Start searching from index 6 (which is "w" in "world").
        c. Searches backward (from index 6 to index 0).
        d. Finds first "o" at index 4 when moving backwards.  */
        
        let text = "hello world";

        console.log(text.indexOf("o"));       // 4 (first "o" found at index 4)
        console.log(text.indexOf("o", 5));    // 7 (search starts from index 5, finds next "o" at 7)
        console.log(text.indexOf("z"));       // -1 (not found)

        console.log(text.lastIndexOf("o"));      // 7 (last "o" found at index 7)
        console.log(text.lastIndexOf("o", 6));   // 4 (searching backwards from index 6)
        console.log(text.lastIndexOf("z"));      // -1 (not found)


/*
Q3❓. includes() Example with Start Position ?
Ans. */ 
        console.log("hello world".includes("o", 5));  // true (Search starts from index 5)
        console.log("hello world".includes("h", 1));  // false (Search starts from index 1, missing 'h')

/*
Q4❓. includes() Example with Start Position ?
Ans. */ 
        console.log("hello world".startsWith("hello"));   // true
        console.log("hello world".startsWith("world"));   // false
        console.log("hello world".startsWith("world", 6)); // true (starts checking from index 6)

        console.log("hello world".endsWith("world"));  // true
        console.log("hello world".endsWith("hello"));  // false
        console.log("hello world".endsWith("o", 5));   // true (Considers only first 5 chars: "hello")


/*
==================================Real World================================

❓ Q1: How can you check if a substring exists in a string using indexOf()?
*/
let str = "hello";
console.log(str.indexOf("l") !== -1); // true (found at index 2)


/*
❓ Q2: How can you find all occurrences of a character in a string?
*/
let word = "hello";
let positions = [];
let pos = word.indexOf("l");

while (pos !== -1) {
    positions.push(pos);
    pos = word.indexOf("l", pos + 1);
    // indexOf() can take startingPosition from where it will start seaching
}

console.log(positions); // [2, 3]


/*
❓ Q3: How can you check if a word exists in a sentence?
*/
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.includes("fox"));  // true
console.log(sentence.includes("cat"));  // false


/*
❓ Q4: How can you validate if a URL starts with "https://"?
*/
let url = "https://example.com";
console.log(url.startsWith("https://"));  // true


/*
❓ Q5: How can you check if a filename has a specific extension?
*/
let filename = "report.pdf";
console.log(filename.endsWith(".pdf")); // true
console.log(filename.endsWith(".doc")); // false


/*
❓ Q6: It extracts the last part after the dot (.), making it flexible for filenames with multiple dots (file.name.pdf).
*/
function hasValidExtensionSplit(filename) {
    let ext = filename.split(".").pop(); // Get the last part after '.'
    return ["pdf", "xlsx", "ppt"].includes(ext.toLowerCase());
}

// "filename".split(".")   => ["file", "pdf"]   |  Split String from .
//  ["file", "pdf"].pop()  =>  "pdf"            |  extact extension using pop()       

console.log(hasValidExtensionSplit("file.pdf"));   // true
console.log(hasValidExtensionSplit("data.XLSX"));  // true
console.log(hasValidExtensionSplit("slides.ppt")); // true
console.log(hasValidExtensionSplit("image.png"));  // false
