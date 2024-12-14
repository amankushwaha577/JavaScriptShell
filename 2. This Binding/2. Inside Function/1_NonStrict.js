function test() {
    console.log(this);
  }
  test();
  

// Output:

// In browsers: Window object (Propertise like Audio Settings, GPU texture, Navigator).
// In Node.js: global object ( Properties like setTimeout, setInterval, fetch).
// Explanation: In a regular function, this points to the global object in non-strict mode.