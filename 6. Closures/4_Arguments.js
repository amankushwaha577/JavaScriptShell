function outer(x) {
  return function inner(y) {
    return x + y;
  };
}

const closureFunc = outer(5);
console.log(closureFunc(3)); // 8


// Explanation:

// The inner function has access to both the parameter y and the x from the outer scope, even after outer has finished executing. 
// This is a closure that retains access to the lexical scope.
