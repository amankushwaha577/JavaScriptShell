console.log(a);
var a = 5;

var test = function () { 
  console.log(b);
  var b = 10;
};
test();

// OP:
// undefined
// undefined


// After hoisting :
var a;          // Hoisted (initialized as undefined)
console.log(a); // undefined
a = 5;          // Assignment happens here

var test;            // Hoisted (initialized as undefined)
test = function () { // Function expression assigned here
  var b;             // Hoisted inside function (initialized as undefined)
  console.log(b);    // undefined
  b = 10;            // Assignment happens here
};

test(); // Function call

/*
Just for Learn :
a. When any function (funtion declaration / function expression / Arrow function is called, a new function execution context is created. 
b. here when test(); is called a new EC is created.
*/

