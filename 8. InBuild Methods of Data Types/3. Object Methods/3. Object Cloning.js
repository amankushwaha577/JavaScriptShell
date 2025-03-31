/*
3️⃣ Object Cloning & Merging Methods:
-------------------------------------

1. Object.fromEntries() – Convert Key-Value Pairs to Object:           Object.fromEntries(entries);
------------------------------------------------------------------

        a. Creates a new object from an array of key-value pairs.
        b. Useful for converting `Map` objects or arrays into plain objects. */

        // Example: Creating an object from key-value pairs
        let entries = [["name", "Alice"], ["age", 25], ["city", "Paris"]];

        let obj = Object.fromEntries(entries);

        console.log(obj); // { name: "Alice", age: 25, city: "Paris" }


/*
2. Object.assign() – Merge Objects into a Target Object:               Object.assign(target, ...sources);
------------------------------------------------------------------

        a. Copies properties from one or more source objects to a target object.
        b. Mutates the target object.
        c. Performs a **shallow copy** (nested objects are referenced, not cloned). */
        
        // Example: Merging objects
        let obj1 = { name: "John" };
        let obj2 = { age: 30 };
        let obj3 = { city: "New York" };

        let mergedObj = Object.assign({}, obj1, obj2, obj3);

        console.log(mergedObj); // { name: "John", age: 30, city: "New York" }


/*
3. structuredClone() – Deep Copy an Object:                           structuredClone(obj);
------------------------------------------------------------------

        a. Creates a deep copy of an object, including nested properties.
        b. Unlike `Object.assign()`, it copies all levels of an object.
        c. Does not copy functions or prototype chains. */

        // Example: Deep copying an object
        let original = { name: "Eve", details: { age: 22, city: "Berlin" } };

        let deepCopy = structuredClone(original);

        deepCopy.details.age = 30;

        console.log(original.details.age); // 22  (original remains unchanged)
        console.log(deepCopy.details.age); // 30  (deep copy modified)
