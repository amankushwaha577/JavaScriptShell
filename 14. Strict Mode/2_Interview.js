// Interview Output-Based Questions:
// ------------------------------------

"use strict";
a = 5;
console.log(a);  
// OP: ReferenceError: a is not defined


"use strict";
delete Object.prototype;  
// OP:  TypeError: Cannot delete property 'prototype' of function Object()
// Explanation: Deleting properties of native objects like Object.prototype is not allowed.


"use strict";
const obj = { x: 10 };
Object.freeze(obj);
obj.x = 20;
console.log(obj.x);   
// OP: 10
// Explanation: Object.freeze prevents modifications to the object in strict mode.


"use strict";
function greet(name, name) {
   console.log(`Hello ${name}`);
}
greet("Ananya", "World"); 
// SyntaxError: Duplicate parameter name not allowed in this context


"use strict";
const obj = { a: 1 };
Object.defineProperty(obj, "b", { value: 2, writable: false });
obj.b = 10;    // TypeError: Cannot assign to read-only property 'prop'
console.log(obj.b); 
//  JavaScript will throw a TypeError, and the script will stop execution. This means the console.log statement will not be reached.





