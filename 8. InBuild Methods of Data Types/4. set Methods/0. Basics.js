/*
Que🔹. What are the different types of Map built-in methods in JavaScript?
Answer. JavaScript Map objects come with built-in methods that can be categorized as follows:


1. Creation and Initialization:
------------------------------
   a. new Map()                => Creates a new empty Map.
   b. new Map([[key, value]]) => Initializes a Map with key-value pairs.


2. Basic Operations:
--------------------
   a. set(key, value)   => Adds or updates the key with the given value.
   b. get(key)          => Returns the value for the given key (or undefined).
   c. has(key)          => Checks if a key exists (returns true/false).
   d. delete(key)       => Removes the key-value pair.
   e. clear()           => Removes all key-value pairs.
   f. size              => Property showing the number of elements.


3. Iteration Methods:
---------------------
   a. keys()            => Returns an iterator over keys.
   b. values()          => Returns an iterator over values.
   c. entries()         => Returns an iterator over [key, value] pairs.
   d. forEach(callback) => Executes a callback for each key-value pair.


4. Conversion:
--------------
   a. Object.entries(obj) => Can convert an object to a Map using new Map(Object.entries(obj))
   b. Array.from(map)     => Converts a Map to an array of [key, value] pairs.


5. Notes:
---------
   - Keys in Map can be of any type (objects, functions, etc.).
   - Maintains insertion order of keys.
   - Differs from plain objects which only use strings or symbols as keys.
*/
