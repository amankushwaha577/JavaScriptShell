console.log(1);

setTimeout(() => console.log(2), 1000);

setTimeout(() => console.log(3), 0);

console.log(4);


// 1
// 4
// 3
// 2


// console.log(1) and console.log(4) run synchronously.
// setTimeout(() => console.log(3), 0) is executed after the synchronous code finishes.
// setTimeout(() => console.log(2), 1000) runs after a 1000ms delay.
