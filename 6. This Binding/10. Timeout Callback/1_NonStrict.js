setTimeout(function () {
    console.log(this);
  }, 1000);
  

//   Output:

//   In browsers: Window object.
//   In Node.js: Timeout object.

//   Explanation: this in setTimeout callbacks defaults to the global object (window in browsers, Timeout in Node.js).
  
  