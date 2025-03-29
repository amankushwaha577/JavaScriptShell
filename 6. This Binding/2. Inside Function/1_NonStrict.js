// Function demonstrating `this` behavior
function test() {
  console.log(this);
}
test();

/*
Output:
---------
  1. In browsers: Logs the Window object (contains properties like Audio Settings, GPU texture, Navigator).
  2. In Node.js:  Logs the global object (contains properties like setTimeout, setInterval, fetch).

Explanation:
------------
- In a regular function, `this` points to the global object in non-strict mode.
- The reason `this` inside a regular function in Node.js (outside of strict mode) points to the global object instead of `module.exports`
is due to the different execution contexts of functions versus modules in Node.js.

------------------------------------------------------------
1. `this` in Node.js Modules
------------------------------------------------------------
- In Node.js, each file is treated as a separate module.
- In the global context of a module, `this` refers to the `module.exports` object.

Example:
  console.log(this); // Logs: {}

- This happens because the global context of the module is wrapped by Node.js in a function like this (conceptually):
  (function(exports, require, module, __filename, __dirname) {
      // Your module's code
  });

------------------------------------------------------------
2. `this` in Regular Functions
------------------------------------------------------------
- When a regular function is executed in Node.js, it is not bound to the module’s scope or `module.exports` by default.
- Instead, the function’s `this` depends on how the function is called.
- If called in the global context, `this` refers to the global object (`global`).

Example:
  function test() {
      console.log(this); // In Node.js: Logs the global object
  }
  test();

- The function call `test()` doesn’t associate `this` with the module, so the default global object (`global`) is used instead.

------------------------------------------------------------
Module-level `this` vs. Function-level `this`
------------------------------------------------------------
- At the module level, `this` refers to `module.exports`.
- Inside a function, `this` is determined by how the function is called, not by its enclosing module.
*/
