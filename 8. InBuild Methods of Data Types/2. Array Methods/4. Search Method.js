/*
4. Search Methods :
-------------------
    a. find(), findIndex(), indexOf(), lastIndexOf(), includes()
*/


/*
1. find() – Find the First Matching Element :                      array.find(callbackFunction);
---------------------------------------------------

        a. Returns **the first** element that satisfies the condition.
        b. Returns `undefined` if no element matches. */

        let numbers = [10, 20, 30, 40, 50];
        let firstMatch = numbers.find(num => num > 25);

        console.log(firstMatch);  // 30 (first number greater than 25)
        console.log(numbers);     // [10, 20, 30, 40, 50] (unchanged)


/*
2. findIndex() – Find the Index of the First Matching Element :    array.findIndex(callbackFunction);
------------------------------------------------------

        a. Returns **the index** of the first element that satisfies the condition.
        b. Returns `-1` if no element matches.*/

        let firstMatchIndex = numbers.findIndex(num => num > 25);

        console.log(firstMatchIndex);  // 2 (index of 30)
        console.log(numbers);          // [10, 20, 30, 40, 50] (unchanged)


/*
3. indexOf() – Find the Index of a Specific Value :                array.indexOf(value, startIndex);
-----------------------------------------------------

        a. Searches for a value and returns **its first occurrence index**.
        b. Returns `-1` if the value is not found.
        c. Search is **strictly equal (`===`)**.
        d. `startIndex` is optional (default: `0`). */

        let fruits = ["apple", "banana", "cherry", "banana"];
        let bananaIndex = fruits.indexOf("banana");

        console.log(bananaIndex);  // 1 (first occurrence)
        console.log(fruits.indexOf("grape"));  // -1 (not found)


/*
4. lastIndexOf() – Find the Index of the Last Occurrence :         array.lastIndexOf(value, fromIndex);
------------------------------------------------------

        a. Searches for a value and returns **its last occurrence index**.
        b. Returns `-1` if the value is not found.
        c. Search is **strictly equal (`===`)**.
        d. `fromIndex` is optional (default: `array.length - 1`). */

        let lastBananaIndex = fruits.lastIndexOf("banana");

        console.log(lastBananaIndex);  // 3 (last occurrence of "banana")


/*
5. includes() – Check If a Value Exists in an Array :              array.includes(value, startIndex);
------------------------------------------------------

        a. Returns `true` if the value exists in the array.
        b. Returns `false` if the value is not found.
        c. Search is **strictly equal (`===`)**.
        d. `startIndex` is optional (default: `0`). */

        console.log(fruits.includes("cherry"));  // true
        console.log(fruits.includes("grape"));   // false
        console.log(fruits.includes("banana", 2));  // true (search starts from index 2)


 /*
========================= Real-World Q&A: Array Search Methods ========================= */


/*
❓ Q1: How can you find the first even number in an array? */
let numbers1 = [11, 15, 18, 21, 30, 42];
let firstEven = numbers1.find(num => num % 2 === 0);
console.log(firstEven);  // 18 (first even number)


/*
❓ Q2: How can you find the index of the first number greater than 50 in an array? */

let values = [10, 20, 35, 55, 60, 75];
let firstIndex = values.findIndex(num => num > 50);
console.log(firstIndex);  // 3 (index of 55)


/*
❓ Q3: How can you check the position of a specific word in a list of programming languages? */

let languages = ["Python", "JavaScript", "C++", "Java", "JavaScript"];
console.log(languages.indexOf("JavaScript"));  // 1 (first occurrence)
console.log(languages.indexOf("Ruby"));  // -1 (not found)


/*
❓ Q4: How can you find the last occurrence of the word 'apple' in an array? */ 
let fruits4 = ["banana", "apple", "orange", "apple", "grape"];
console.log(fruits4.lastIndexOf("apple"));  // 3 (last occurrence)

/*
❓ Q5: How can you check if the word 'chocolate' exists in a list of desserts? */
let desserts = ["cake", "ice cream", "chocolate", "pie"];
console.log(desserts.includes("chocolate"));  // true
console.log(desserts.includes("pudding"));  // false

/*
❓ Q6: How can you check if 'JavaScript' exists in a list, starting the search from index 3? */
let courses = ["HTML", "CSS", "JavaScript", "Python", "JavaScript"];
console.log(courses.includes("JavaScript", 3));  // true (found at index 4)