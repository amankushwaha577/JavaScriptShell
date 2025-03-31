/*
2️⃣ Object Property Methods:
---------------------------

1. Object.keys() – Get All Keys of an Object:                           Object.keys(obj);
------------------------------------------------------------------

        a. Returns an array containing all enumerable property names (keys) of an object.
        b. Useful for iterating over object properties.
        c. Does not include **symbol** properties. */

        let person = { name: "John", age: 30, city: "New York" };
        let keys = Object.keys(person);

        console.log(keys); // ["name", "age", "city"] (returns keys in an array)


/*
2. Object.values() – Get All Values of an Object:                     Object.values(obj);
------------------------------------------------------------------

        a. Returns an array containing all enumerable values of an object's properties.
        b. Does not include **symbol** properties. */

        let person2 = { name: "Alice", age: 25, city: "London" };
        let values = Object.values(person2);

        console.log(values); // ["Alice", 25, "London"] (returns values in an array)


/*
3. Object.entries() – Get Key-Value Pairs of an Object:               Object.entries(obj);
------------------------------------------------------------------

        a. Returns an array of arrays, where each inner array represents a key-value pair.
        b. Useful for looping through an object. */

        let car = { brand: "Tesla", model: "Model S", year: 2024 };
        let entries = Object.entries(car);

        console.log(entries); // [["brand", "Tesla"], ["model", "Model S"], ["year", 2024]]


/*
4. Object.hasOwn() – Check if an Object Has a Property:               Object.hasOwn(obj, prop);
------------------------------------------------------------------

        a. Returns `true` if the object has the specified **own** property, otherwise `false`.
        b. Unlike `hasOwnProperty()`, it is recommended for better reliability. */

        let book = { title: "JavaScript Guide", pages: 300 };
        
        console.log(Object.hasOwn(book, "title")); // true
        console.log(Object.hasOwn(book, "author")); // false


