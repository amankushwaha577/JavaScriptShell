// Every function has a prototype property by default.
function Test() {}

console.log(typeof Test.prototype); // "object"
// Its just like "typeof {}"

console.log(Test.prototype.constructor === Test); // true
// The prototype is automatically an object with a constructor property pointing back to the function.






// -------------------------------------------------------
// So It's newly created child will also point to function.
// -------------------------------------------------------

const test = new Test();

console.log(test.__proto__.constructor === Test); // true

// 1. The constructor property points to the function that is used to create an object.



