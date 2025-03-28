for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

// 0
// 1
// 2

// Explanation:
// let is block-scoped, 
// Each iteration of the loop creates a new block-scoped i due to let, 
// and the value is preserved for each callback in setTimeout.




// If var were used:
// ----------------------------
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// 3
// 3
// 3

// Explanation:
// var is function-scoped, so the same i is shared across all iterations. 
// By the time the setTimeout callbacks run, the loop has already completed, and i is 3.