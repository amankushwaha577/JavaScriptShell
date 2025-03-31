/*
4️⃣ Object Freezing & Sealing Methods:
-------------------------------------

1. Object.freeze() – Make an Object Immutable:                    Object.freeze(obj);
------------------------------------------------------------------

        a. Prevents adding, removing, or modifying properties.
        b. The object becomes fully immutable.
        c. Returns the frozen object. */
        
        // Example: Freezing an object
        let user = { name: "Alice", age: 25 };

        Object.freeze(user);

        user.age = 30;   // ❌ No effect (modification not allowed)
        user.city = "Paris"; // ❌ No effect (adding new properties not allowed)
        delete user.name;  // ❌ No effect (deleting properties not allowed)

        console.log(user); // { name: "Alice", age: 25 }  (unchanged)


/*
2. Object.seal() – Lock Property Structure but Allow Modification:    Object.seal(obj);
------------------------------------------------------------------

        a. Prevents adding or removing properties.
        b. Allows modifying existing properties.
        c. Returns the sealed object. */

        // Example: Sealing an object
        let person = { name: "John", age: 30 };

        Object.seal(person);

        person.age = 35;  // ✅ Allowed (modifying existing properties)
        person.city = "London";  // ❌ Not allowed (new properties can't be added)
        delete person.name;  // ❌ Not allowed (properties can't be removed)

        console.log(person); // { name: "John", age: 35 } (modification applied)
