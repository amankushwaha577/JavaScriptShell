/*
1. Mutation Methods (Modify Original Array):
--------------------------------------------

1. push() – Add Elements to the End :                                   array.push(element1, element2, ...);
-------------------------------------

        a. Adds one or more elements to the end of an array.
        b. Modifies the original array.
        c. Returns the new length of the array. */

        let arr = [1, 2, 3];
        let newLength = arr.push(4, 5);
        console.log(arr);       // [1, 2, 3, 4, 5]  (modified)
        console.log(newLength); // 5  (returns new length)
 
/* 
2. pop() – Remove the Last Element :                                     array.pop();
------------------------------------

        a. Removes the last element from an array.
        b. Modifies the original array.
        c. Returns the removed element (or undefined if empty). */

        let arr2 = [1, 2, 3];
        let removed = arr2.pop();

        console.log(arr2);      // [1, 2]  (modified)
        console.log(removed);  // 3  (returns removed value)


/*
3. unshift() – Add Elements to the Beginning :                           array.unshift(element1, element2, ...);
---------------------------------------------

        a. Adds one or more elements to the start of an array.
        b. Modifies the original array.
        c. Returns the new length of the array.  */

        let arr3 = [2, 3, 4];
        let newLength3 = arr3.unshift(0, 1);

        console.log(arr3);       // [0, 1, 2, 3, 4]  (modified)
        console.log(newLength3); // 5  (returns new length)


/*
4. shift() – Remove the First Element :                                  array.shift();
--------------------------------------- 

        a. Removes the first element from an array.
        b. Modifies the original array.
        c. Returns the removed element (or undefined if empty). */

        let arr4 = [1, 2, 3];
        let removed4 = arr4.shift();

        console.log(arr4);      // [2, 3]  (modified)
        console.log(removed4);  // 1  (returns removed value)


/*
5. splice() – Add/Remove Elements in an Array :                          array.splice(start, deleteCount, item1, item2, ...);
----------------------------------------------

        a. Modifies the original array.
        b. Can remove elements, add new elements, or both.
        c. Returns an array of removed elements.  */

        // Ex : Removing elements:
        let arr5 = [10, 20, 30, 40];
        let removed5 = arr5.splice(1, 2);

        console.log(arr5);      // [10, 40]  (modified)
        console.log(removed5);  // [20, 30]  (removed elements)

        // Ex : Adding elements:
        let arr55 = [10, 40];
        let removed55 = arr55.splice(1, 0, 20, 30); // Insert at index 1

        console.log(arr55);      // [10, 20, 30, 40]  (modified)
        console.log(removed55);  // []                (removed elements)


/*
6. reverse() – Reverse the Order of Elements :                         array.reverse();
----------------------------------------------   

        a. Modifies the original array.
        b. Returns the modified array.*/

        let arr6 = [1, 2, 3, 4];
        let reversed6 = arr6.reverse();

        console.log(arr6);      // [4, 3, 2, 1]  (modified)
        console.log(reversed6); // [4, 3, 2, 1]  (modified)



/*
7. sort() – Sort Elements: (Interview)                                array.sort(compareFunction);
-------------------------   

        a. Modifies the original array.
        b. By default, sorts elements as strings (not numerically).
        c. A compare function is needed for numerical sorting. */

        // Ex :
        let arr7 = [40, 100, 1, 5];
        arr7.sort();
        console.log(arr7); // [1, 40, 5, 100]  (wrong order because of string sorting)

        // Fix using a compare function:
        arr7.sort((a, b) => a - b);  // Ascending order
        console.log(arr7);  // [1, 5, 40, 100]


/*
8. fill() – Fill an Array with a Static Value :                     array.fill(value, start, end);
-----------------------------------------------

        a. Modifies the original array.
        b. Replaces all or part of the array with a specified value.
        c. start (optional) → Index where filling starts (default: 0).
        d. end (optional) → Index where filling stops (exclusive, default: array.length). */


        // Example 1 – Fill Entire Array
        let arr8 = [1, 2, 3, 4, 5];
        arr8.fill(0);  
        console.log(arr8); // [0, 0, 0, 0, 0]

        // Example 2 – Fill from a Specific Index
        let arr88 = [1, 2, 3, 4, 5];
        arr88.fill(9, 2);  
        console.log(arr88); // [1, 2, 9, 9, 9]

        //Example 3 – Fill a Range (Start to End)
        let arr888 = [1, 2, 3, 4, 5];
        arr888.fill("X", 1, 4);
        console.log(arr888); // [1, "X", "X", "X", 5]   👉 Fills from index 1 to 3 (end is exclusive).

        // Example 4 – Fill an Empty Array
        let arr9 = new Array(5).fill("Hello");
        console.log(arr9); // ["Hello", "Hello", "Hello", "Hello", "Hello"]



