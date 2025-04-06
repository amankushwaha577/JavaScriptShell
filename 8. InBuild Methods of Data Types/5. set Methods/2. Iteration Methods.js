/*
2. Iteration Methods :
----------------------

   a. values(), keys()  => Returns a Set iterator with values (keys() is alias of values()).
   b. entries()         => Returns [value, value] pairs for each item (for compatibility with Map).
   c. forEach(callback) => Executes a callback for each value in the Set. */


/*
1. values() – Get All Values as an Iterator :                        set.values();
-----------------------------------------------

        a. Returns an iterator of all values in insertion order.
        b. Can be used in a for...of loop or spread into an array.
        c. `keys()` is an alias of `values()` in Set (since no keys exist). */

        let fruits = new Set(["apple", "banana", "cherry"]);
        //  fruits.keys() = fruits.values() = SetIterator {'apple', 'banana', 'cherry'}

        for (let val of fruits.values()) {
            console.log(val); // apple, banana, cherry
        }

        // Spread into array:
        let fruitArray = [...fruits.values()];
        console.log(fruitArray); // ["apple", "banana", "cherry"]

        // Using keys() (same result):
        for (let key of fruits.keys()) {
            console.log(key); // apple, banana, cherry
        }



/*
2. entries() – Returns [value, value] Pairs :                        set.entries();
-----------------------------------------------

        a. Returns an iterator with [value, value] pairs (not [key, value]).
        b. Maintained for compatibility with Map.
        c. Useful when destructuring. */

        let colors = new Set(["red", "green"]);
        // colors.entries()   => SetIterator {'apple' => 'apple', 'banana' => 'banana', 'cherry' => 'cherry'}

        for (let [key, value] of colors.entries()) {
            console.log(key, value);  // red red, green green
        }

        // Spread into array:
        let entries = [...fruits.entries()];
        console.log(entries); // [ ["red", "red"],  ["green", "green"] ]



/*
3. forEach() – Execute a Callback for Each Value :                  set.forEach(callback);
---------------------------------------------------

        a. Calls a function once for each value in the Set.
        b. Order of execution is insertion order.
        c. Callback receives (value, value, set) to mimic Map behavior. */

        let languages = new Set(["JS", "Python", "Ruby"]);

        languages.forEach((value, againValue, originalSet) => {
            console.log(value);         // JS, Python, Ruby
            console.log(againValue);    // Same as value (for Map compatibility)
        });



/*
================= Real-World Q&A for Set Iteration Methods =================
*/


/*
1️⃣ values()/keys() – How can you loop through all users stored in a Set?
------------------------------------------------------------------------
*/
let users = new Set(["Alice", "Bob", "Charlie"]);

for (let user of users.values()) {
    console.log(`User: ${user}`);
}
// Output:
// User: Alice
// User: Bob
// User: Charlie


/*
2️⃣ entries() – How can you destructure items in a Set like in Map?
-------------------------------------------------------------------
*/
let tags = new Set(["news", "sports", "tech"]);
for (let [tag1, tag2] of tags.entries()) {
    console.log(`Tag: ${tag1} | Mirror: ${tag2}`);
}
// Output:
// Tag: news | Mirror: news
// Tag: sports | Mirror: sports
// Tag: tech | Mirror: tech


/*
3️⃣ forEach() – How can you display all settings in a Set with forEach?
------------------------------------------------------------------------
*/
let settings = new Set(["dark-mode", "notifications", "auto-save"]);
settings.forEach(setting => console.log(`Setting enabled: ${setting}`));
// Output:
// Setting enabled: dark-mode
// Setting enabled: notifications
// Setting enabled: auto-save
