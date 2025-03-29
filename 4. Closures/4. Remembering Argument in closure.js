function firstName(x) {
  return function sirName(y) {
    return x + y;
  };
}

const fullName = firstName("Aman");
console.log(fullName("Kushwaha"));  // AmanKushwaha


/*
Explanation:
------------
The sirName() function has access to both the parameter y and the x from the outer scope, even after outer has finished executing. 
This is a closure that retains access of the lexical scope.

*/