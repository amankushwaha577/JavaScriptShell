const fs = require('fs');

// setTimeout(() => {
//     console.log('Timers Phase - setTimeout executed');
// }, 0);

// setImmediate(() => {
//     console.log('Check Phase - setImmediate executed');
// });

// fs.readFile(__filename, () => {
//     console.log('Poll Phase - File read completed');

//     setImmediate(() => {
//         console.log('Check Phase - setImmediate inside I/O callback');
//     });

//     setTimeout(() => {
//         console.log('Timers Phase - setTimeout inside I/O callback');
//     }, 0);
// });

// console.log('Synchronous Code - Executed First');

// setTimeout(() => console.log("setTimeout"), 0);
// setImmediate(() => console.log("setImmediate"));
// fs.readFile(__filename, () => {
//   console.log("File read complete (Poll Phase)");
// });
// process.nextTick(() => console.log("nextTick"));
// Promise.resolve().then(() => console.log("Promise"));

setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("Promise"));