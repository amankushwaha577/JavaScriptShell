function outer() {
  console.log(x);
  var x = 10;

  function inner() {
    console.log(x);
    var x = 20;
  }
  inner();
}
outer();
// OP:
// undefined
// undefined

// Explanation:
// 1.In the outer function, var x is hoisted but uninitialized at the time of the first console.log, so it logs undefined.
// 2.In the inner function, var x shadows the x from the outer scope. It is also hoisted but not initialized, so the second console.log logs undefined.
