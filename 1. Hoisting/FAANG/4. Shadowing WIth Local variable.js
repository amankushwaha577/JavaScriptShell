var x = 1;

function foo() {
  console.log(x);
  var x = 2;
}

foo();
console.log(x);

// OP:
// undefined
// 1

/*
1. In foo, the var x declaration is hoisted within the function, so the console.log(x) inside logs undefined.
2. The global x remains 1 and is logged as 1 in the second console.log. */



























var x;  // Hoisted (declared but not initialized)
x = 1;  // Assigned after hoisting

function foo() {
  var x;          // Hoisted inside function (local scope, initialized as undefined)
  console.log(x); // undefined
  x = 2;          // Assignment happens here
}

foo();
console.log(x); // 1
