const button = document.createElement('button');
button.textContent = 'Click me';
button.addEventListener('click', function () {
  console.log(this); // What is logged?
});
document.body.appendChild(button);


// The error : document is not defined occurs because the document object is not available in Node.js by default—it is specific to web browsers. 
// In a Node.js environment, there is no DOM (Document Object Model), 
// so document and window are undefined unless you're using a library like JSDOM or running the code in a browser-like environment.

// Why This Happens?
// Browser Context: The document object is provided by the browser to interact with the DOM.
// Node.js Context: Node.js is server-side and doesn’t have a built-in DOM