// Long-running setTimeout
setTimeout(() => console.log("Timeout 1"), 1000);
setTimeout(() => console.log("Timeout 2"), 0);
console.log("End");


// Explanation:
// End executes first.
// Timeout 2 executes after the shortest delay.
// Timeout 1 executes after 1000ms.

// Output: End, Timeout 2, Timeout 1.