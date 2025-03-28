const fs = require('fs');

fs.readFile(__filename, () => {  // I/O operation (Poll Phase)
  setTimeout(() => console.log("setTimeout"), 0);
  setImmediate(() => console.log("setImmediate"));
  process.nextTick(() => console.log("nextTick"));
  Promise.resolve().then(() => console.log("Promise"));
});