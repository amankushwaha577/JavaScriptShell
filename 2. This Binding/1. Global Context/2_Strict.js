'use strict';
console.log(this);


// 1. In browsers: undefined.
// 2. In Node.js: {} (empty object) (aka Global object).


// 1. In Browsers:
// Why undefined?
// -------------------------------
// When strict mode is enabled in the global scope in the browser (outside of any function or object method), this is undefined. 
// This is because strict mode prevents this from referring to the global object (i.e., window). In non-strict mode, this would have been the global window object.
// Since there’s no explicit object or context for this, it defaults to undefined.


// 2. In Node.js:
// Why {} (empty object)?
// --------------------------------
// In Node.js, strict mode behaves slightly differently when executed in the global scope (outside a function). 
// Even in strict mode, this in the global context refers to the global object (but not the window object as in browsers).
