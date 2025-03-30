function Person() {}
console.log(Person.prototype); // Op : {}
// Every custom function / Constructor in JavaScript has a prototype by default, which is an empty object ({}).

// But other datatype custom variables gives undefined.
let a = [1,2,3]  // a.prototype => undefined
let b= {a:"a"}   // a.prototype => undefined
let c = "a"      // a.prototype => undefined


console.log(new Person().__proto__); // Same as Person.prototype
// Op : {}
// newly created instance inherits that prototype from Constructor using new Keyword.


// Think Like This :
console.log(new Person().__proto__ === Person.prototype ); // true
// __proto__ of new instance's is set to the prototype of the CreateUser() constructor that created it.

                  // Compare ⬇️
                  
// But Note :
console.log(Person.__proto__ === Function.prototype) // true
// __proto__ of custom Function === prototype of Function constructor
