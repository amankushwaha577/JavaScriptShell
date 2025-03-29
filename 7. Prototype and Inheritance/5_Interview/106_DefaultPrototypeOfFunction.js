// Every function has a prototype property by default.
function Test() {}

console.log(typeof Test.prototype); // "object"
// Its just like "typeof {}"

console.log(Test.prototype.constructor === Test); // true
// The prototype is automatically an object with a constructor 
// property pointing back to the function.