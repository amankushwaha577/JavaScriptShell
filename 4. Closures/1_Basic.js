// Closures are a fundamental concept in JavaScript, where a function retains access to its lexical scope, 
// even after the outer function has finished execution. Below are common interview questions related to closures, 
// especially when dealing with variable access and creating functions in loops.


function outer() {
    let outerVar = "I am from outer scope";
  
    function inner() {
      console.log(outerVar);
    }
  
    return inner;
  }
  
  const closureFunc = outer();
  closureFunc(); // "I am from outer scope"


// Explanation:

// The inner function retains access to outerVar, even after the outer function has finished execution. 
// This is the closure in action.
  