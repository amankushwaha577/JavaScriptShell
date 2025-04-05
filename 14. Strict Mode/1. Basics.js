/*
1. Variables Must Be Declared :
------------------------------
Without strict mode, variables can be used without var, let, or const, which implicitly declares them as global variables.
In strict mode, attempting to use an undeclared variable throws an error. */

"use strict";
x = 10; // ReferenceError: x is not defined



/*
2. Assignment to Read-Only Properties :
------------------------------------
Strict mode throws an error when trying to assign a value to a read-only property. */

"use strict";
const obj = {};
Object.defineProperty(obj, "prop", { value: 42, writable: false });
obj.prop = 77; // TypeError: Cannot assign to read-only property 'prop'



/*
3. Deleting Variables or Functions :
-----------------------------------
Strict mode disallows deleting variables or function names. */

"use strict";
let x = 10;
delete x; // SyntaxError: Delete of an unqualified identifier in strict mode


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

