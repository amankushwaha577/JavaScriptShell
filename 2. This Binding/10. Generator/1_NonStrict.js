// 1. In the Global Context:
function* gen() {
  console.log(this);
}
gen().next();


// In browsers: Window object.
// In Node.js: global object (the global object in Node.js)..

// In non-strict mode, this inside a generator function defaults to the global object (window in browsers, global in Node.js) 
// when the generator is invoked without any explicit context.