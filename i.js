const fs = require('fs');

setTimeout(() => {
    console.log('Timers Phase - setTimeout executed');
}, 0);

setImmediate(() => {
    console.log('Check Phase - setImmediate executed');
});

fs.readFile(__filename, () => {
    console.log('Poll Phase - File read completed');

    setImmediate(() => {
        console.log('Check Phase - setImmediate inside I/O callback');
    });

    setTimeout(() => {
        console.log('Timers Phase - setTimeout inside I/O callback');
    }, 0);
});

console.log('Synchronous Code - Executed First');
