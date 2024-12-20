function Person() {}
console.log(Person.prototype); // Op : {}
// Every custom function / Constructor in JavaScript has a prototype property by default, which is an empty object ({}).


console.log(new Person().__proto__); // Same as Person.prototype
// Op : {}
// Every custom function in JavaScript has a prototype property by default, which is an empty object ({}).
// It is just like "newlyCreatedInstance.__proto__"


console.log(Person.prototype === new Person().__proto__); // true
// Prototype of custom Function === __proto__ of newly created instance 
