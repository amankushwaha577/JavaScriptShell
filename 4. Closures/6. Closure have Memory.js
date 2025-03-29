function outer() {
  let outerVar = "Outer variable";

  return function inner() {
    console.log(outerVar);
  };
}

const closureFunc1 = outer();
const closureFunc2 = outer();
closureFunc1(); // "Outer variable"
closureFunc2(); // "Outer variable"


/*
Explanation:
------------
1. Even though outer() is called twice, 
   each returned closure (closureFunc1, closureFunc2 ) retains access to its own outerVar in memory, 
2. which can be useful for managing state in a functional style. */