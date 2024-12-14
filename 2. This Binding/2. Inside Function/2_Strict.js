'use strict';
function test() {
  console.log(this);
}
test();

// Output: undefined

// Explanation: In strict mode, this inside a function is undefined.