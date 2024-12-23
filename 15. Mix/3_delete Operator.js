

// 3. delete Operator
// The delete operator removes a property from an object, but it doesn't delete variables.

const obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj); // Output: { b: 2 }

const arr = [1, 2, 3];
delete arr[1];
console.log(arr); // Output: [1, <empty>, 3] (hole in the array)

// Key Notes:
// delete on array elements leaves holes; use splice to avoid this.
// delete on variables has no effect.



// -----------------------------------------------------
// Note : Variables Declared with var, let, or const
// Variables declared in these ways cannot be deleted using the delete operator:

let a = 10;
delete a; // Returns false in non-strict mode; 
console.log(a); // Output: 10

"use strict";
var b = 20;
delete b; // throws a TypeError in strict mode
console.log(b); // It will not execute

var globalVar = 100;
console.log(delete globalVar); // Output: false
console.log(globalVar); // Output: 100


