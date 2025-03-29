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


/*
1.In the outer function, var x is hoisted but uninitialized at the time of the first console.log, so it logs undefined.
2.In the inner function, 
   var x; creates a new local variable that shadows the global x.
   It is also hoisted but not initialized, so the second console.log logs undefined.
*/

































function outer() {
  var x;          // Hoisted (initialized as undefined)
  console.log(x); // undefined
  x = 10;         // Assignment happens here

  function inner() {
    var x;          // Hoisted (initialized as undefined)
    console.log(x); // undefined
    x = 20;         // Assignment happens here
  }
  inner();
}
