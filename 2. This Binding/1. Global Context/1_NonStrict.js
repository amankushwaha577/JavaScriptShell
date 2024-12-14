console.log(this);

// Output:

// 1. In browsers: Window object (Propertise like Audio Settings, GPU texture, Navigator).
// 2. In Node.js: {} (empty object).

//    Explanation: In the global execution context, this refers to the global object (window in browsers and global in Node.js). 
//    In modules (Node.js), global object is an empty object.
