/*
3. Conversion Utilities :
-------------------------

   a. Array.from(set)         => Converts Set to Array.
   b. new Set(array)          => Converts Array to Set (removes duplicates).
   c. [...set]                => Spread syntax to convert Set to Array.
*/



/*
1. Array.from(set) – Convert Set to Array :                       Array.from(set);
-----------------------------------------------

        a. Creates a new array from a Set’s values.
        b. Maintains insertion order.
        c. Can be combined with map logic: `Array.from(set, mapFn)`. */

        let set1 = new Set(["a", "b", "c"]);
        let arr1 = Array.from(set1);

        console.log(arr1); // ["a", "b", "c"]

        // With map logic
        let lengths = Array.from(set1, val => val.length);
        console.log(lengths); // [1, 1, 1]



/*
2. new Set(array) – Convert Array to Set :                        new Set(array);
----------------------------------------------

        a. Converts an array into a Set.
        b. Automatically removes duplicates.
        c. Useful for deduplicating data. */

        let nums = [1, 2, 2, 3, 4, 4, 5];
        let uniqueNums = new Set(nums);

        console.log(uniqueNums); // Set(5) {1, 2, 3, 4, 5}



/*
3. Spread Syntax – Convert Set to Array :                        [...set];
-------------------------------------------

        a. Uses spread `...` to unpack Set into an array.
        b. Simple and readable.
        c. Equivalent to `Array.from(set)`. */

        let set2 = new Set(["x", "y", "z"]);
        let arr2 = [...set2];

        console.log(arr2); // ["x", "y", "z"]



/*
================= Real-World Q&A for Set Conversion Utilities =================
*/


/*
1️⃣ Array.from(set) – How do you list all unique roles from a Set in an array?
-----------------------------------------------------------------------------
*/
let rolesSet = new Set(["admin", "user", "guest"]);
let rolesArray = Array.from(rolesSet);
console.log(rolesArray); // ["admin", "user", "guest"]


/*
2️⃣ new Set(array) – How can you remove duplicate tags from a list?
-------------------------------------------------------------------
*/
let tagsArray = ["tech", "news", "tech", "sports", "news"];
let uniqueTags = [...new Set(tagsArray)];
console.log(uniqueTags); // ["tech", "news", "sports"]


/*
3️⃣ Spread Syntax – What’s a quick way to turn a Set into an array?
-------------------------------------------------------------------
*/
let set3 = new Set([10, 20, 30]);
let arr3 = [...set3];
console.log(arr3); // [10, 20, 30]
