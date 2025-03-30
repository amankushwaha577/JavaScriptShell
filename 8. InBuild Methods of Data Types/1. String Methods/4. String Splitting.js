/* 
========================= JavaScript String Built-in Methods =========================


4️⃣ String Splitting & Joining:
--------------------------------
1. split(delimiter)  → Splits a string into an array.                        "hello world".split(" ");   // ["hello", "world"]
2. join(delimiter)  → Joins array elements into a string.               ["hello", "world"].join(" ");   // "hello world"        */


/*
❓ Q1: How can you count the number of words in a sentence?
*/
let sentence = "JavaScript is awesome!";
let wordCount = sentence.split(" ").length;
console.log(wordCount); // 3

/*
❓ Q2: How can you reverse a string using split() and join()?
*/
let str = "hello";
let reversed = str.split("").reverse().join("");
console.log(reversed); // "olleh"

/*
❓ Q3: How can you extract a domain from an email using split()?
*/
let email = "user@example.com";
let domain = email.split("@")[1];
console.log(domain); // "example.com"

/*
❓ Q4: How can you convert a comma-separated string into an array?
*/
let csv = "apple,banana,grape";
let fruits = csv.split(",");
console.log(fruits); // ["apple", "banana", "grape"]

/*
❓ Q5: How can you join an array of words into a sentence?
*/
let words = ["JavaScript", "is", "fun"];
let sentence2 = words.join(" ");
console.log(sentence2); // "JavaScript is fun"

/*
❓ Q6: What happens if you call split("") on a string?
*/
let letters = "hello".split("");
console.log(letters); // ["h", "e", "l", "l", "o"]
