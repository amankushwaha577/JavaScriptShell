/*
Iteration & Reduction Methods (Do Not Modify Original Array):
--------------------------------------------------------------
    a. forEach(), map(), filter(), some(), every(), reduce(), reduceRight()
*/


/*
1. forEach() – Execute a Function on Each Element :                   array.forEach(callbackFunction);
-----------------------------------------------------

        a. Iterates over each element in the array.
        b. **Does not** return anything (undefined).
        c. Used for side effects like logging, modifying elements inside objects, etc. */

        let numbers = [1, 2, 3];
        numbers.forEach(num => console.log(num * 2));

        // Output: 
        // 2
        // 4
        // 6

        console.log(numbers);  // [1, 2, 3] (unchanged)


/*
2. map() – Create a New Transformed Array :                          array.map(callbackFunction);
-----------------------------------------------

        a. Returns a **new array** with transformed elements.
        b. Commonly used for data transformation. */

        let nums = [2, 3, 4];
        let doubled = nums.map(num => num * 2);

        console.log(doubled);  // [4, 6, 8] (new array)
        console.log(nums);     // [2, 3, 4] (unchanged)


/*
3. filter() – Select Elements Based on Condition :                   array.filter(callbackFunction);
-----------------------------------------------

        a. Returns a **new array** containing elements that satisfy the condition.
        b. Used to remove unwanted elements. */

        let words = ["apple", "banana", "kiwi", "grape"];
        let shortWords = words.filter(word => word.length <= 5);

        console.log(shortWords);  // ["apple", "kiwi"] (new array)
        console.log(words);       // ["apple", "banana", "kiwi", "grape"] (unchanged)


/*
4. some() – Check If Any Element Matches Condition :                 array.some(callbackFunction);
--------------------------------------------

        a. Returns `true` if **at least one** element satisfies the condition.
        b. Returns `false` otherwise.
        c. Stops checking once a match is found (efficient). */

        let nums2 = [1, 2, 3, 4, 5];
        let hasEven = nums2.some(num => num % 2 === 0);

        console.log(hasEven);  // true (because 2, 4 are even)


/*
5. every() – Check If All Elements Match Condition :                 array.every(callbackFunction);
--------------------------------------------

        a. Returns `true` only if **all** elements satisfy the condition.
        b. Returns `false` if at least one element fails.
        c. Stops checking once a failure is found (efficient). */

        let allPositive = nums2.every(num => num > 0);
        console.log(allPositive);  // true

        let allEven = nums2.every(num => num % 2 === 0);
        console.log(allEven);  // false (not all numbers are even)


/*
6. reduce() – Reduce Array to a Single Value :                      array.reduce(callbackFunction, initialValue);
------------------------------------------------------

        a. Iterates over the array and accumulates a single return value.
        b. Takes a callback with `(accumulator, currentValue, index, array)`.
        c. `initialValue` is optional, but recommended.
        d. Common use cases: sum, average, maximum/minimum, objects merging. */

        let arr = [1, 2, 3, 4];
        let sum = arr.reduce((acc, num) => acc + num, 0);

        console.log(sum);  // 10 (1 + 2 + 3 + 4)


/*
7. reduceRight() – Reduce Array from Right to Left :                array.reduceRight(callbackFunction, initialValue);
------------------------------------------------------

        a. Works like `reduce()`, but iterates **from right to left**.
        b. Useful for cases where order matters (e.g., reversing concatenation). */

        let words2 = ["Hello", "World"];
        let sentence = words2.reduceRight((acc, word) => acc + " " + word);

        console.log(sentence);  // "World Hello"
