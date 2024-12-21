let x = 10;
{
  var x = 20;
  console.log(x); // ?
}
console.log(x); // ?

// Answer:
// ---------------------
// var x = 20: SyntaxError
// let creates a block-scoped variable, and you cannot redeclare x with var in the same scope.