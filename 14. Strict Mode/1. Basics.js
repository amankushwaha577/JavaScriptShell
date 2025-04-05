/*
1. Variables Must Be Declared :
------------------------------
Without strict mode, variables can be used without var, let, or const, which implicitly declares them as global variables.
In strict mode, attempting to use an undeclared variable throws an error. */

        // Without strict mode:
        x = 10;         // ✅ No error, but x becomes a global variable (even if inside a function)
        console.log(x); // 10

        "use strict";
        x = 10; // ReferenceError: x is not defined


        
/*
2. Assignment to Read-Only Properties :
------------------------------------
Strict mode throws an error when trying to assign a value to a read-only property. */

        // Without strict mode:
        const obj1 = {};
        Object.defineProperty(obj1, "fixed", { value: 100, writable: false });
        obj1.fixed = 200;        // ✅ No error, but the value doesn't change
        console.log(obj1.fixed); // 100

        // With strict mode:
        "use strict";
        const obj = {};
        Object.defineProperty(obj, "prop", { value: 42, writable: false });
        obj.prop = 77; // ❌ TypeError: Cannot assign to read-only property 'prop'

        // ✅ Adding new property to object IS allowed in strict mode:
        const data = {};
        data.x = 9; // ✅ No error — allowed in strict mode because 'x' is a new property
        data.x = 9; // ✅ No error — reassigning existing property is also allowed
        console.log(data); // { x: 9 } Ensure properties meant to be constant are not accidentally reassigned.



/*
3. Deleting Variables or Functions :
-----------------------------------
Strict mode disallows deleting variables or function names. */

        "use strict";
        let x = 10;
        delete x; // SyntaxError: Delete of an unqualified identifier in strict mode

        // Without strict mode:
        var a = 10;
        delete a; // ✅ No error, but doesn't actually delete the variable



/*
4. Duplicate Parameter Names :
---------------------------------
Strict mode throws an error for duplicate parameter names in function declarations. */

        "use strict";
        function sum(a, a) { // SyntaxError: Duplicate parameter name not allowed
            return a + a;
        }



/*
5. Octal Literals Are Not Allowed :
----------------------------------
Octal literals (e.g., 012) are not permitted in strict mode. */

"use strict";
const num = 012; // SyntaxError: Octal literals are not allowed



/*
6. this in Functions :
----------------------------
In non-strict mode, this in a function refers to the global object (window in browsers).
In strict mode, this in a standalone function is undefined. */

"use strict";
function checkThis() {
    console.log(this); // Output: undefined
}
checkThis();



/*
7. Reserved Keywords :
----------------------------------
Strict mode disallows using future reserved keywords as variable names. */

"use strict";
const let = 10; // SyntaxError: Unexpected strict mode reserved word

