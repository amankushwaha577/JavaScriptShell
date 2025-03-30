/*
1. Mutation Methods (Modify Original Array):
--------------------------------------------

1. push() – Add Elements to the End :                                       array.push(element1, element2, ...);
-------------------------------------

        a. Adds one or more elements to the end of an array.
        b. Modifies the original array.
        c. Returns the new length of the array. */

        let arr = [1, 2, 3];
        let newLength = arr.push(4, 5);
        console.log(arr);       // [1, 2, 3, 4, 5]  (modified)
        console.log(newLength); // 5  (returns new length)
 
/* 
2. pop() – Remove the Last Element :                                          array.pop();
------------------------------------

        a. Removes the last element from an array.
        b. Modifies the original array.
        c. Returns the removed element (or undefined if empty). */

        let arr2 = [1, 2, 3];
        let removed = arr2.pop();

        console.log(arr2);      // [1, 2]  (modified)
        console.log(removed);  // 3  (returns removed value)


/*
3. unshift() – Add Elements to the Beginning :                                array.unshift(element1, element2, ...);
---------------------------------------------

        a. Adds one or more elements to the start of an array.
        b. Modifies the original array.
        c. Returns the new length of the array.  */

        let arr3 = [2, 3, 4];
        let newLength3 = arr3.unshift(0, 1);

        console.log(arr3);       // [0, 1, 2, 3, 4]  (modified)
        console.log(newLength3); // 5  (returns new length)


/*
4. shift() – Remove the First Element :                                       array.shift();
--------------------------------------- 

        a. Removes the first element from an array.
        b. Modifies the original array.
        c. Returns the removed element (or undefined if empty). */

        let arr4 = [1, 2, 3];
        let removed4 = arr4.shift();

        console.log(arr4);      // [2, 3]  (modified)
        console.log(removed4);  // 1  (returns removed value)


/*
5. splice() – Add/Remove Elements in an Array :   array.splice(start, deleteCount, item1, item2, ...);
----------------------------------------------

        a. Modifies the original array.
        b. Can remove elements, add new elements, or both.
        c. Returns an array of removed elements.  */

        // Ex : Removing elements:
        let arr5 = [10, 20, 30, 40];
        let removed5 = arr5.splice(1, 2);

        console.log(arr5);      // [10, 40]  (modified)
        console.log(removed5);  // [20, 30]  (removed elements)


        let arr6 = [10, 40];
        let removed6 = arr6.splice(1, 0, 20, 30); // Insert at index 1

        console.log(arr6);      // [10, 20, 30, 40]  (modified)
        console.log(removed6);  // []                (removed elements)


