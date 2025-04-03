// 1. Object References and Mutations
// -------------------------------------------------------------
    const obj1 = { a: 1 };
    const obj2 = obj1;
    obj2.a = 2;
    console.log(obj1.a); // Output: 2

    // Explanation:
    // Objects are reference types in JavaScript. obj2 is not a copy of obj1; it’s a reference to the same memory location.
    // Modifying obj2.a also changes obj1.a because both variables point to the same object.


    const obj = { a: 1 };
    const copy = { ...obj };
    copy.a = 2;
    console.log(obj.a); // Output: 1
    console.log(copy.a); // Output: 2

    // Explanation:
    // --------------------
    // The spread operator creates a shallow copy of obj. 
    // Changes to copy do not affect the original obj.


    const obj11 = { a: { b: 1 } };
    const obj22 = { ...obj11 };
    obj22.a.b = 2;
    console.log(obj11.a.b); // Output: 2

    // Explanation:
    // ---------------------
    // The spread operator only creates a shallow copy. 
    // Nested objects (e.g., obj1.a) are still referenced, so changes to obj2.a.b also affect obj1.a.b.




// 2. Array References and Mutations :
// -------------------------------------------------------------

    let arr = [1, 2, 3];
    let newArr = arr;
    newArr.push(4);
    console.log(arr); // Output: [1, 2, 3, 4]

    // Explanation:
    //------------
    // Arrays are also reference types. newArr references the same array in memory as arr.
    // Modifying newArr (e.g., by pushing an element) directly affects arr.


    const arr5 = [1, 2, 3];
    const newArrr = [...arr5, 4];
    console.log(arr5); // Output: [1, 2, 3]
    console.log(newArrr); // Output: [1, 2, 3, 4]

    // Explanation:
    // -----------------
    // The spread operator ...arr creates a shallow copy of arr. 
    // Modifying newArr does not affect the original arr.


