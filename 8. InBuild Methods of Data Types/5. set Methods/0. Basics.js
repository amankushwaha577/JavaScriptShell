/*
Que🔹. What are the different types of Set built-in methods in JavaScript?
Answer. JavaScript provides several Set methods, which can be grouped as follows:


1. Basic Operations :
---------------------
   a. add(value)        => Adds a unique value to the Set.
   b. delete(value)     => Removes a specific value from the Set.
   c. has(value)        => Checks if a value exists in the Set (true/false).
   d. clear()           => Removes all values from the Set.
   e. size              => Property to get the number of elements.


2. Iteration Methods :
----------------------
   a. values(), keys()  => Returns a Set iterator with values (keys() is alias of values()).
   b. entries()         => Returns [value, value] pairs for each item (for compatibility with Map).
   c. forEach(callback) => Executes a callback for each value in the Set.


3. Conversion Utilities :
-------------------------
   a. Array.from(set)         => Converts Set to Array.
   b. new Set(array)          => Converts Array to Set (removes duplicates).
   c. [...set]                => Spread syntax to convert Set to Array.


4. Common Use-Cases :
----------------------
   ✅ Remove duplicates from an array:
        const nums = [1, 2, 2, 3];
        const unique = [...new Set(nums)];
        console.log(unique); // [1, 2, 3]

   ✅ Set operations (using custom functions):
        - Union
        - Intersection
        - Difference


5. Set vs Array (Quick Comparison):
-----------------------------------
   a. Unique values only (no duplicates).
   b. No index-based access (unlike arrays).
   c. Faster lookups for existence with .has().

*/
