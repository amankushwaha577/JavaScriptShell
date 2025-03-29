let x = 10;
{
  var x = 20;
  console.log(x); // ?
}
console.log(x); // ?

/*
OP : SyntaxError

a. let x = 10;
   x is declared using let, which is block-scoped. And It's in global scope.

b. var x = 20;
   var is function-scoped. so It does't care about block {}. so It's also in global scope.

   But let x = 10; already exists in the global scope, and var cannot redeclare a let variable in the same scope.
*/


let y = 10;
{
  let y = 20;  // Different block-scoped variable
  console.log(y); // 20 (block scope)
}
console.log(y); // 10 (outer scope)

// Solution : because the inner y is scoped only inside the block.


/*
1. Scope:
    var: Function-scoped.
    let & const: Block-scoped.

2. Shadowing:
    var can shadow but leaks into non-function scopes.
    let & const allow clean block-level shadowing.

Hoisting:
    var: Hoisted and initialized to undefined.
    let & const: Hoisted but in Temporal Dead Zone (TDZ).

Best Practices:
Use let and const over var to avoid scope-related bugs and ensure better readability. */