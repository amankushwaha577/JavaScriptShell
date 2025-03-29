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


// Explanation:

// 1. All the functions inside the loop share the same i variable, which is 3 by the time the loop finishes. 
//    This happens because var is function-scoped (not block-scoped), and the loop runs asynchronously.
// 2. To fix this, use let for block-scoping, so each function captures the current value of i.





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


// Explanation:

// 1. Using let in the loop ensures that each closure captures its own copy of i. 
//    Now each function logs the value of i as expected.
