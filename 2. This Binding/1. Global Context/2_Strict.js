// In strict mode, when you use this in the global scope (outside of any function or object method), 
// it does not refer to the global object (in Node.js, the global object).
'use strict';
console.log(this);


// 1. In browsers: undefined.
// 2. In Node.js: {} (empty object) (aka explicit object above Global object).


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
// In Node.js, each JavaScript file is treated as a module, and the this value inside a module is bound to the module.exports object, 
// which is initially an empty object {}.  

// So, even when you enable strict mode with 'use strict';, 
// we are preventing this to refer global object (global in Node.js || global object ( Properties like setTimeout, setInterval, fetch)) 
// but 'this' already having module.exports object in lexical scope so this is refering to module.exports object ( {} )

// Ye Non Strict mode mei to Global object tak ko refer nahi kar raha tha
// To strict mode mei kis liye rokna ye already use refer nahi kar rhaha
// Ye kewal mode.export oject ({}) ko refer kar raha hei to strict mode & non strict mode mei isi ko refer karega.
