function createFunctions() {
  let funcs = [];
  for (var i = 0; i < 3; i++) {
    funcs.push(function() {
      console.log(i);
    });
  }
  return funcs;
}

const functions = createFunctions();
functions[0](); // 3
functions[1](); // 3
functions[2](); // 3

/*
Explanation:
------------
1. All the functions inside the loop share the same i variable, which is 3 by the time the loop finishes. 
   This happens because var is function-scoped (not block-scoped), and the loop runs.
2. To fix this, use let for block-scoping, so each function captures the current value of i. */



function createFunctionss() {
  let funcs = [];
  for (let i = 0; i < 3; i++) {
    funcs.push(function() {
      console.log(i);
    });
  }
  return funcs;
}

const functionss = createFunctionss();
functionss[0](); // 0
functionss[1](); // 1
functionss[2](); // 2

/*
1. Fixing Closure with Timers Using let:
---------------------------------------
a. Using let in the loop ensures that each closure captures its own copy of i. 
   Now each function logs the value of i as expected.*/





function createFunctions() {
  let funcs = [];
  for (var i = 0; i < 3; i++) {
    (function(i) {  // IIFE Create a new function scope with its own 'i
      funcs.push(function() {
        console.log(i);
      })
    })(i);
  }
  return funcs;
}
/*
2. Alternative Fix Using Closures (IIFE): If you must use var, wrap the function inside an Immediately Invoked Function.
----------------------------------------

a. Inside the IIFE, i is now scoped inside the function, not shared globally.
   (function (i) { Clusure } )(i)

b. IIFE creates a new execution context for each iteration, ensuring that i is stored individually.
*/