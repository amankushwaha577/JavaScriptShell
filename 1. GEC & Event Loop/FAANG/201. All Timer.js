console.log("I/O Callback");

setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("process.nextTick"));
Promise.resolve().then(() => console.log("Promise.then"));

/*
OP :
----
    I/O Callback
    process.nextTick
    Promise.then
    setImmediate
    setTimeout


Priority :    process.nextTick() --> Promise -->  setImmediate()  -->  setTimeout()
---------
*/