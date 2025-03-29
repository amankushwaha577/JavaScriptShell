const button = document.createElement('button');
button.textContent = 'Click me';
button.addEventListener('click', function () {
  console.log(this); // What is logged?
});
document.body.appendChild(button);


// The error : document is not defined occurs because the document object is not available in Node.js by default—it is specific to web browsers. 

// Why This Happens?
// Browser Context: The document object is provided by the browser to interact with the DOM.
// Node.js Context: Node.js is server-side and doesn’t have a built-in DOM