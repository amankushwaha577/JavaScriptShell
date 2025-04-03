/*
1. Destructure Object/Array using Rest Operator :
------------------------------------------------
       a. Rest is used to collect remaining elements.
       b. Spread is used to unpack elements.  */

    // A. Rest Syntax :
    const [head, ...tail] = [1, 2, 3, 4];
    console.log(head); // Output: 1
    console.log(tail); // Output: [2, 3, 4]

    // a. Array destructuring allows extracting the first element into head 
    // b. and the remaining elements into tail using the rest operator.


    const obj = { a: 1, b: 2, c: 3 };
    const { a, ...restt } = obj;
    console.log(a); // Output: 1
    console.log(restt); // Output: { b: 2, c: 3 }

    // The destructuring syntax { a, ...rest } extracts the property a and assigns the remaining properties to the rest object.
    // The ...rest operator gathers the rest of the object into a new object.


/* 
2. Combining Objects/Arrays using Spread Operator:
------------------------------------------------- */

    // Combining Objects
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const combinedObj = { ...obj1, ...obj2 };
    console.log(combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

    const obj25 = { x: 1, y: 2 };
    const obj26 = { y: 3, z: 4 };
    const merged = { ...obj25, ...obj26 };
    console.log(merged); // Output: { x: 1, y: 3, z: 4 }

    // Note :
    // The spread operator ... combines properties from obj1 and obj2 into a new object.
    // If properties overlap (e.g., y), the value from the latter object (obj2) overwrites the earlier one.


    
    // Combining Arrays
    const arr1 = [1, 2];
    const arr2 = [...arr1, 3, 4];
    console.log(arr2); // Output: [1, 2, 3, 4]

    const arr11 = [1, 2];
    const arr22 = [3, 4];
    const combinedArr = [...arr11, ...arr22];
    console.log(combinedArr); // Output: [1, 2, 3, 4]


/*
Interview Output-Based Questions :
---------------------------------------------------------------------------------------------------------- */

    const obj5 = { a: 1, b: 2, c: 3 };
    const { r, ...rest } = obj5;
    console.log(r, rest);

    // OP: undefined { a: 1, b: 2, c: 3 }
    // a. r tries to extract a property named r from obj5, but since obj5 does not have an r property, r becomes undefined.
    // b. ...rest collects all remaining properties (a, b, c) into the rest object.


    const obj10 = { x: 1, y: { z: 2 } };
    const obj20 = { ...obj10 };  // Explanation: Shallow copying with spread doesn't deep copy nested objects.
    obj20.y.z = 3;
    console.log(obj10.y.z);
    // OP: 3

    const numbers = [1, 2, 3];
    const newNumbers = [...numbers, 4]; //Explanation: A new array is created with the spread operator, so the references differ.
    console.log(numbers === newNumbers);
    // OP: false

    const userr = { name: "John", age: 30 };
    const newUser = { ...userr, age: 25 };
    console.log(newUser.age);  // Explanation: The age property in user is overwritten in newUser.
    // OP: 25




