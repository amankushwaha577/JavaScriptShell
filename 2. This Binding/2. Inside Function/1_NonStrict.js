function test() {
    console.log(this);
  }
  test();
  

// Output:

// In browsers: Window object (Propertise like Audio Settings, GPU texture, Navigator).
// In Node.js: global object ( Properties like setTimeout, setInterval, fetch).
// Explanation: In a regular function, this points to the global object in non-strict mode.


// The reason this inside a regular function in Node.js (outside of strict mode) points to the global object instead of module.exports 
// is due to the different """"execution context"""" of functions versus modules in Node.js.

// 1. this in Node.js Modules
//    A. In Node.js, each file is treated as a separate module.
//    B. In the global context of a module, this refers to the module.exports object.
//         console.log(this); // Logs: {}
//    C. This happens because the global context of the module is wrapped by Node.js in a function like this (conceptually):
//         (function(exports, require, module, __filename, __dirname) {
//                 Your module's code
//          });