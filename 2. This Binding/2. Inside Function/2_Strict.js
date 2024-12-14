'use strict';
function test() {
  console.log(this);
}
test();

// Output: undefined

// Explanation: In strict mode, this inside a function is undefined.

// Explanation:
// 1. Strict mode enforces stricter rules for the value of this. 
// When you call a regular function like test() in strict mode, this does not automatically refer to the 
// global object (such as window in browsers or global in Node.js).

// 2. In strict mode, if this is not explicitly bound to an object, it will be undefined. 
// This is in contrast to non-strict mode, where this would default to the global object (i.e., window in browsers) when not explicitly bound.