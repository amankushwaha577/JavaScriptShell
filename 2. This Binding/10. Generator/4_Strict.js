'use strict';
function* gen() {
  console.log(this);
}
gen().next();


// // Op: same like functions
// In browsers: undefined
// In Node.js: undefined