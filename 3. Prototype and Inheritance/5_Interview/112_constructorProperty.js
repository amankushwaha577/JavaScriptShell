function Person() {}
const john = new Person();

console.log(john.constructor === Person); // true

Person.prototype = {};

console.log(john.constructor === Person); // false

// 1. The constructor points to the function used to create an object.
// 2. Overwriting the prototype breaks the link to the constructor.
