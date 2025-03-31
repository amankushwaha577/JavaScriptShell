/*
1️⃣ Object Creation & Prototyping Methods:
-----------------------------------------

1. Object.create() – Create a New Object with a Given Prototype:       Object.create(proto);
------------------------------------------------------------------

        a. Creates a new object with the specified prototype.
        b. The new object inherits from the given prototype.
        c. Can optionally include additional properties.  */

        // Example: Creating an object with a prototype
        let personPrototype = {
            greet: function() {
                return `Hello, my name is ${this.name}`;
            }
        };

        let person = Object.create(personPrototype);  // Creating object with prototype
        person.name = "Alice";

        console.log(person.greet()); // "Hello, my name is Alice"
        console.log(Object.getPrototypeOf(person) === personPrototype); // true


/*
2. Object.assign() – Copy Properties to an Object:                   Object.assign(target, ...sources);
------------------------------------------------------------------

        a. Copies all enumerable own properties from one or more source objects to a target object.
        b. Modifies and returns the target object.
        c. Useful for cloning objects and merging multiple objects. */

        // Example: Merging two objects
        let obj1 = { a: 1, b: 2 };
        let obj2 = { b: 10, c: 3 };
        
        let merged = Object.assign({}, obj1, obj2);

        console.log(merged); // { a: 1, b: 10, c: 3 } (obj2 overwrites obj1's "b" property)

        // Example: Cloning an object
        let original = { name: "John", age: 30 };
        let copy = Object.assign({}, original);

        console.log(copy); // { name: "John", age: 30 }

