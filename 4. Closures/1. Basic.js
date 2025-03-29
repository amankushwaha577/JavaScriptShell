/*
A closure is a function that remembers the variables from its outer scope( lexical scope), even after the outer function has finished executing.
*/

function outer() {
    let outerVar = "I am from outer scope";
  
    function inner() {
      console.log(outerVar);
    }
  
    return inner;
  }
  
  const closureFunc = outer();
  closureFunc(); // "I am from outer scope"

/*
Explanation:
------------
The inner function retains access to outerVar, even after the outer function has finished execution. 
This is the closure in action.*/
  