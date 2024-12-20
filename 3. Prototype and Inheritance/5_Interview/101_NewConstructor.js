function Person() {}
console.log(Person.prototype); // Op : {}
// Every custom function / Constructor in JavaScript has a prototype property by default, which is an empty object ({}).

// But other datatype custom variables gives undefined.
let a = [1,2,3]  // a.prototype => undefined
let b= {a:"a"}   // a.prototype => undefined
let c = "a"      // a.prototype => undefined


console.log(new Person().__proto__); // Same as Person.prototype
// Op : {}
// Every custom function in JavaScript has a prototype property by default, which is an empty object ({}).
// It is just like "newlyCreatedInstancefromPerson.__proto__"


console.log(Person.prototype === new Person().__proto__); // true
// Prototype of custom Function === __proto__ of newly created instance 


console.log(Person.__proto__ === Function.prototype) // true
// __proto__ of custom Function === prototype of Function constructor
