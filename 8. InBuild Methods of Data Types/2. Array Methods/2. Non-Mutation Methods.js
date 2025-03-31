/*
Non-Mutation Methods (Return a New Array) :
---------------------------------------------
    a. map(), filter(), slice(), 
    b. concat(), flat(), flatMap()
*/

/*
1. map() – Transform Each Element :                                   array.map(callbackFunction);
-------------------------------

        a. Returns a new array where each element is transformed based on the callback function.
        b. The callback function takes `(element, index, array)` as parameters. */

        let numbers = [1, 2, 3];
        let squared = numbers.map(num => num * num);

        console.log(squared);   // [1, 4, 9] (new array)
        console.log(numbers);   // [1, 2, 3] (original unchanged)


/*
2. filter() – Select Elements That Pass a Condition :                array.filter(callbackFunction);
-----------------------------------------------

        a. Returns a **new array** containing elements that satisfy the condition. */

        let nums = [10, 25, 30, 45, 50];
        let filtered = nums.filter(num => num > 30);

        console.log(filtered);  // [45, 50] (new array)
        console.log(nums);      // [10, 25, 30, 45, 50] (unchanged)


/*
3. slice() – Extract a Portion Without Modifying Original :          array.slice(start, end);
------------------------------------------------------

        a. Extracts a portion of an array **without modifying** the original array.
        b. `start`: Starting index (inclusive).
        c. `end`: Ending index (exclusive). If omitted, extracts till the end. */

        let arr1 = ["a", "b", "c", "d", "e"];
        let newArr1 = arr1.slice(1, 4);

        console.log(newArr1);  // ["b", "c", "d"]
        console.log(arr1);     // ["a", "b", "c", "d", "e"] (unchanged)


/*
4. concat() – Merge Two or More Arrays :                             array.concat(array2, array3, ...);
-----------------------------------------------

        a. Combines multiple arrays into a **new array**. */

        let arr2a = [1, 2];
        let arr2b = [3, 4];
        let mergedArr = arr2a.concat(arr2b);

        console.log(mergedArr);  // [1, 2, 3, 4] (new array)
        console.log(arr2a);      // [1, 2] (unchanged)
        console.log(arr2b);      // [3, 4] (unchanged)


/*
5. flat() – Flatten Nested Arrays :                                  array.flat(depth);
----------------------------------

        a. Returns a **new array** by flattening nested arrays.
        b. `depth`: Specifies how deep to flatten (default is `1`). */

        let nestedArr = [1, [2, 3], [4, [5, 6]]];
        let flatArr = nestedArr.flat();

        console.log(flatArr);  // [1, 2, 3, 4, [5, 6]] (flattened 1 level)

        // Full Flattening (`Infinity` depth)
        let deeplyNestedArr = [1, [2, [3, [4, 5]]]];
        let completelyFlatArr = deeplyNestedArr.flat(Infinity);

        console.log(completelyFlatArr);  // [1, 2, 3, 4, 5] (fully flattened)


/*
6. flatMap() – Flatten & Map in One Step :                           array.flatMap(callbackFunction);
--------------------------------------------------

        a. First, **maps** each element using a callback function.
        b. Then, **flattens** the result (by one level).
        c. More efficient than `.map().flat(1)`. */

        let sentences = ["Hello world", "JavaScript is fun"];
        let words = sentences.flatMap(sentence => sentence.split(" "));

        console.log(words);  // ["Hello", "world", "JavaScript", "is", "fun"]

