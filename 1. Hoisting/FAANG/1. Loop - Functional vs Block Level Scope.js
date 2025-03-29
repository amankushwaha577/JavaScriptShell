for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

// 0
// 1
// 2

/*
Explanation:
1. let is block-scoped, 
   Each iteration of the loop creates a new block-scoped i due to let.
   { let i = 0; setTimeout(() => console.log(i), 0);} 
   { let i = 1; setTimeout(() => console.log(i), 0);}
   { let i = 2; setTimeout(() => console.log(i), 0);}
   { let i = 3; setTimeout(() => console.log(i), 0);}
2. and the value is preserved for each callback in setTimeout. */



// If var were used:
// ----------------
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// 3
// 3
// 3

/*
Explanation:
1. var is function-scoped, 
   Mean var is not able to see block level it's just like on global scope.
   Var i = 0
   Var i = 1
   Var i = 2
   Var i = 3
   Now, the same i is shared across all iterations. 
2. By the time the setTimeout callbacks run, the loop has already completed, and i is 3. */