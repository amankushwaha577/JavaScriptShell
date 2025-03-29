console.log(add(2, 3));
console.log(sub(5, 3));

function add(a, b) {
  return a + b;
}

var sub = function (a, b) {
  return a - b;
};

// op: 
// 5
// TypeError: sub is not a function

/*
1. add is a function declaration and is fully hoisted with its definition.
2. sub is a function expression assigned to a variable. 
   The variable sub is hoisted, but the function itself is not, so sub is undefined at the time of the call. */


/*
Hoisting with Arrow Functions:
------------------------------

Arrow functions are treated like function expressions.*/

console.log(sum(2, 3));
var sum = (a, b) => a + b;
// OP: TypeError: sum is not a function 


