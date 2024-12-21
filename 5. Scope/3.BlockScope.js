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





// Key Takeaways :-
// --------------

// Scope:
// var: Function-scoped.
// let & const: Block-scoped.

// Shadowing:
// var can shadow but leaks into non-function scopes.
// let & const allow clean block-level shadowing.

// Hoisting:
// var: Hoisted and initialized to undefined.
// let & const: Hoisted but in Temporal Dead Zone (TDZ).

// Best Practices:
// Use let and const over var to avoid scope-related bugs and ensure better readability.