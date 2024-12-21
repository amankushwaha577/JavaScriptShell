console.log(x);
var x = 10;
var x = 20; // No error, re-declaration is allowed for var.
console.log(x);

// undefined
// 20


// Explanation:
// var allows re-declaration, so the second declaration overwrites the first. 
// During hoisting, var x is declared but remains undefined until the first assignment.





let y = 10;
// let y = 20; // SyntaxError: Identifier 'y' has already been declared
y = 20; // Reassignment is fine.
console.log(y); // Output: 20


const z = 10;
// const z = 20; // SyntaxError: Identifier 'z' has already been declared
// z = 20;       // TypeError: Assignment to constant variable
console.log(z); // Output: 10



// +-----------------------+------------------+-------------------+-------------------+
// | Feature               | var              | let               | const             |
// +-----------------------+------------------+-------------------+-------------------+
// | Re-declaration        | ✅ Yes           | ❌ No             | ❌ No             |
// | Hoisting              | ✅ Yes           | Yes but ⚠️ TDZ    | Yes but ⚠️ TDZ    |
// | Temporal Dead Zone    | ❌ No            | ✅ Yes            | ✅ Yes            |
// | Scope                 | Global/Function | Block             | Block             |
// | Initial Value         | Optional         | Optional          | Required          |
// | Reassignment          | ✅ Yes           | ✅ Yes            | ❌ No             |
// +-----------------------+------------------+-------------------+-------------------+

// 1. var Behavior
// A. var allows re-declaration within the same scope.
// B. During hoisting, var declarations are moved to the top of their scope and initialized to undefined.
// C. You can reassign values to var as many times as needed.

// 2. let Behavior
// A. let does not allow re-declaration in the same scope.
// B. If you try to declare the same variable using let more than once in the same block, you’ll get a SyntaxError.
// C. During hoisting, let is hoisted but placed in the Temporal Dead Zone (TDZ) until its declaration is encountered. 
//    Accessing it before declaration results in a ReferenceError.

// 3. const Behavior
// A. const does not allow re-declaration, just like let.
// B. const also requires a value to be initialized during its declaration. Failing to do so results in a SyntaxError.
// C. Similar to let, const is hoisted but remains in the Temporal Dead Zone (TDZ) until its declaration is encountered. 
//    Accessing it before declaration results in a ReferenceError.



const obj = { a: 10 };
obj.a = 20; // Allowed
obj = { b: 30 }; // not Allowed

// Answer:
// ---------------
// obj.a = 20: Allowed
// const prevents reassignment of the variable itself, but the object it references is still mutable.

// obj = { b: 30 }: TypeError
// Reassigning the entire object is not allowed with const.
