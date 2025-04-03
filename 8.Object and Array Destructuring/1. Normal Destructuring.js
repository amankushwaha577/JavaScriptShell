/*
1. Destructuring: Destructuring allows you to extract values from arrays or properties from objects into distinct variables.
---------------- */

    // A. Array Destructuring
    const [a, b] = [1, 2, 3];
    console.log(a, b); // Output: 1 2

    // B. Object Destructuring
    const obj = { x: 10, y: 20 };
    const { x, y } = obj;
    console.log(x, y); // Output: 10 20

/*
2. Destructuring :Working with Nested Objects/Arrays :
------------------------------------------------------ */

    const nestedObj = { a: { b: { c: 5 } } };
    const { a: { b: { c } } } = nestedObj;
    console.log(c); // Output: 5

    const user = { name: "Alice", address: { city: "Zagreb", country: "Croatia" } };
    const { address: { city, country } } = user;
    console.log(city, country); // Output: Zagreb Croatia

    const nestedArr = [[1, 2], [3, 4]];
    const [,[second]] = nestedArr;
    console.log(second); // Output: 3

    const arr = [1, [2, 3], 4];
    const [first, [secondd], fourth] = arr;
    console.log(first, secondd, fourth);
    // OP: 1 2 4

    // Note : Use same sytax to destructure.


