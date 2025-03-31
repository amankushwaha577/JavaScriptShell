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

