/*
Creation and Initialization:
------------------------------

1. new Map() – Create an Empty Map:
----------------------------------
        a. Creates a new empty Map.
        b. Useful when you want to add entries dynamically. */

        const emptyMap = new Map();
        console.log(emptyMap); // Map(0) {}

/*
2. new Map([[key, value], ...]) – Initialize with Key-Value Pairs:
------------------------------------------------------------------
        a. Instantly populates a Map with initial key-value pairs.
        b. Keys can be of any type (string, number, object, etc). */

        const initMap = new Map([
            ["name", "John"],
            ["age", 30],
            [{ x: 1 }, "objectKey"]
        ]);

        console.log(initMap);
        // Map(3) { 'name' => 'John', 'age' => 30, { x: 1 } => 'objectKey' }


/*================================== Real World Examples ================================

❓ Q1: How can you create an empty map to store user login attempts?
*/
const loginAttempts = new Map();
loginAttempts.set("user1", 3);
loginAttempts.set("user2", 1);
console.log(loginAttempts); // Map(2) { 'user1' => 3, 'user2' => 1 }

/*
❓ Q2: How can you initialize a Map with default settings?
*/
const defaultSettings = new Map([
    ["theme", "dark"],
    ["notifications", true],
    ["autoSave", false]
]);
console.log(defaultSettings); // Map(3) { 'theme' => 'dark', 'notifications' => true, 'autoSave' => false }

