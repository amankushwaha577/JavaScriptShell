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


// Explanation:
// 1.In foo, the var x declaration is hoisted within the function, so the console.log(x) inside logs undefined.
// 2.The global x remains 1 and is logged as 1 in the second console.log.