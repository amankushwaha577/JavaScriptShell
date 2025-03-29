console.log(this);

// 1. In browsers: Window object (contains properties like Audio Settings, GPU texture, Navigator)..
// 2. In Node.js:  {} empty object instead of global.

/*
In the global execution context, this refers to the global object in Both strict & Non-strict Mode.

Que. Why does `console.log(this)` output `{}` in Node.js?
Ans. a. In the global scope of a Node.js module (outside any function), `this` refers to the module exports object (`module.exports`).
        which is initially an empty object (`{}`).

        However, it is **not** the global object (`global`) like in a browser, where `this` refers to `window`.

     b. When you run `console.log(this)` at the top level of a Node.js script, it outputs `{}` because `this` is bound to `module.exports`.


----------------------------------- Node.js Module Wrapper -----------------------------------
This happens because Node.js wraps every file in an **Immediately Invoked Function Expression (IIFE)** like this:

(function(exports, require, module, __filename, __dirname) {
    // Your module's code
});

Due to this wrapper, `this` at the top level of a module is implicitly set to `module.exports`,
making it an empty object `{}` by default.

*/