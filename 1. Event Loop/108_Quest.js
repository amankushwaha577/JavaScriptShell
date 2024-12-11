setTimeout(() => {
  console.log("Timeout 1");
  setTimeout(() => console.log("Timeout 2"), 0);
}, 0);


// Output: Timeout 1, Timeout 2.

// Explanation:
// The first setTimeout callback (Timeout 1) is added to the macro-task queue and runs.
// Inside it, another setTimeout adds Timeout 2 to the macro-task queue, which runs next.
// Output: Timeout 1, Timeout 2.