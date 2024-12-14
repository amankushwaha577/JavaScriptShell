function test() {
    console.log(this);
  }
  test();
  

// Output:

// In browsers: Window object.
// In Node.js: global object.
// Explanation: In a regular function, this points to the global object in non-strict mode.