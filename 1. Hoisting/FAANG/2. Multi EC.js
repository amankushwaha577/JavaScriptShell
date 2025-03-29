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

