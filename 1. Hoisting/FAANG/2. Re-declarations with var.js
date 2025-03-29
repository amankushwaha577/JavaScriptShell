/*
+-----------------------+------------------+-------------------+-------------------+
| Feature               | var              | let               | const             |
+-----------------------+------------------+-------------------+-------------------+
| Re-declaration        | ✅ Yes           | ❌ No             | ❌ No            |
| Hoisting              | ✅ Yes           | Yes but ⚠️ TDZ    | Yes but ⚠️ TDZ   |
| Temporal Dead Zone    | ❌ No            | ✅ Yes            | ✅ Yes           |
| Scope                 | Global/Function  | Block              | Block            |
| Initial Value         | Optional         | Optional           | Required         |
| Reassignment          | ✅ Yes           | ✅ Yes            | ❌ No            |
+-----------------------+------------------+-------------------+------------------+ */
  

console.log(x);
var x = 10;
var x = 20; // No error, re-declaration is allowed for var.
console.log(x);

// undefined
// 20

/*
1. var allows re-declaration, so the second declaration overwrites the first. 
2. During hoisting, var x is declared but remains undefined until the first assignment. */



let y = 10;
let y = 20;  // SyntaxError: Identifier 'y' has already been declared
y = 20;      // Reassignment is fine.
console.log(y); 

// Output: SyntaxError: Identifier 'y' has already been declared



const z = 10;
const z = 20; // SyntaxError: Identifier 'z' has already been declared
z = 20;       // TypeError: Assignment to constant variable
console.log(z);

// Output: SyntaxError: Identifier 'z' has already been declared




/*
1. var Behavior :
        a. var allows re-declaration within the same scope.
        b. You can reassign values to var as many times as needed.

2. let Behavior :
        a. let does not allow re-declaration in the same scope.
        If you try to declare the same variable using let more than once in the same block, you’ll get a SyntaxError.
        b. You can reassign values to var as many times as needed.

3. const Behavior :
        a. const does not allow re-declaration, just like let.
        b. const also requires a value to be initialized during its declaration. Failing to do so results in a SyntaxError.
        b. You can't reassign values to const.  It will throw typeError.
*/




const obj = { a: 10 };
obj.a = 20;      // Allowed
obj = { b: 30 }; // not Allowed | TypeError: Assignment to constant variable.

// obj.a = 20: Allowed
// const prevents reassignment of the variable itself, but the object it references is still mutable.

// obj = { b: 30 }: TypeError
// Reassigning the entire object is not allowed with const.
