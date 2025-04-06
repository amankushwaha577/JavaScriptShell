/*
2. Basic Operations:
--------------------

1. set(key, value):
-------------------
    ➤ Adds a new key-value pair or updates the value if the key already exists.
    ➤ Returns the Map object (useful for chaining). */

    const userMap = new Map();
    userMap.set("name", "Alice");
    userMap.set("age", 25);
    console.log(userMap); // Map(2) { 'name' => 'Alice', 'age' => 25 }

/*
2. get(key):
------------
    ➤ Retrieves the value associated with the key.
    ➤ Returns undefined if the key doesn't exist. */

    console.log(userMap.get("name")); // Alice
    console.log(userMap.get("email")); // undefined

/*
3. has(key):
------------
    ➤ Checks whether a key exists in the Map.
    ➤ Returns true or false. */

    console.log(userMap.has("age")); // true
    console.log(userMap.has("gender")); // false

/*
4. delete(key):
---------------
    ➤ Removes the specified key-value pair.
    ➤ Returns true if deletion was successful. */

    userMap.delete("age");
    console.log(userMap); // Map(1) { 'name' => 'Alice' }

/*
5. clear():
-----------
    ➤ Removes all key-value pairs from the Map. */

    userMap.clear();
    console.log(userMap); // Map(0) {}

/*
6. size:
--------
    ➤ Property that returns the number of key-value pairs in the Map. */

    const sizesMap = new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3]
    ]);

    console.log(sizesMap.size); // 3


/*================================== Real World Examples ================================

❓ Q1: How can you store user settings in a Map?
*/
const settings = new Map();
settings.set("theme", "dark");
settings.set("notifications", true);
console.log(settings.get("theme")); // dark

/*
❓ Q2: How can you check if a specific user is in an online users Map?
*/
const onlineUsers = new Map([
    ["user1", true],
    ["user2", false]
]);
console.log(onlineUsers.has("user1")); // true
console.log(onlineUsers.has("user3")); // false

/*
❓ Q3: How can you remove a blocked user from a Map?
*/
const blockedUsers = new Map([
    ["spamBot1", true],
    ["troll42", true]
]);
blockedUsers.delete("troll42");
console.log(blockedUsers); // Map(1) { 'spamBot1' => true }

/*
❓ Q4: How can you reset a Map that stores temporary session data?
*/
const sessionData = new Map([
    ["token", "abc123"],
    ["expires", "12:00PM"]
]);
sessionData.clear();
console.log(sessionData); // Map(0) {}

/*
❓ Q5: How can you find the number of different items stored in a Map?
*/
const inventory = new Map([
    ["pen", 10],
    ["notebook", 5],
    ["eraser", 3]
]);
console.log(inventory.size); // 3
