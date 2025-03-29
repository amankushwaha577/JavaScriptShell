function test() {
  console.log(this);
}
test();
// 1. In browsers: Logs the Window object (contains properties like Audio Settings, GPU texture, Navigator).
// 2. In Node.js:  Logs the global object (contains properties like setTimeout, setInterval, fetch).

/*
1. In a regular function, `this` points to the global object in non-strict mode.
2. The reason `this` inside a regular function in Node.js (outside of strict mode) points to the global object instead of `module.exports`
   is due to the different execution contexts of functions versus modules in Node.js.


1. `this` in Node.js Modules :
----------------------------
    a. In Node.js, each file is treated as a separate module.
    b. In the global context of a module, `this` refers to the `module.exports` object.

    Example:
    console.log(this);  -> Logs: {}

    each file is wrapped by Node.js in a function like this (conceptually):
    (function(exports, require, module, __filename, __dirname) {
        // Your module's code
    });


2. `this` in Node.js Regular Functions :
----------------------------------------
     a. When a regular function is executed in Node.js, it is not bound to the module’s scope or `module.exports` by default.
     b. nstead, the function’s `this` depends on how the function is called.
        If called in the global context, `this` refers to the global object (`global`).

     Example:
      function test() {
          console.log(this); // In Node.js: Logs the global object
      }
      test();

     The function call `test()` doesn’t associate `this` with the module, so the default global object (`global`) is used instead.

------------------------------------------------------------
Module-level `this` vs. Function-level `this`
------------------------------------------------------------
1. At the module level, `this` refers to `module.exports`.
2. Inside a function, `this` is determined by how the function is called, not by its enclosing module.
*/
