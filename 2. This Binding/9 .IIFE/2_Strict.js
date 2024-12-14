'use strict';

(function () {
  console.log(this);
})();
// Output:
// In browsers: undefined
// In Node.js: undefined

// Explanation:
// 1. Strict Mode Changes the Value of this:
// In non-strict mode, this inside a function (including an IIFE) defaults to the global object:
// In browsers, this is the window object.
// In Node.js, this is the global object (global).
// In strict mode, this inside a regular function (or IIFE) defaults to undefined because strict mode enforces a stricter set of rules for this behavior.

// 2. Why undefined in Strict Mode?
// Strict mode eliminates the implicit binding of this to the global object.
// Instead, if this is not explicitly set, it remains undefined.

// 3. Important Notes:
// This behavior applies only to functions. Arrow functions behave differently because they do not have their own this.



0
( () => {  // Gloal context
    console.log(this);
  })();
// Output:
// 1. In browsers: undefined.
// 2. In Node.js: {} (empty object).

