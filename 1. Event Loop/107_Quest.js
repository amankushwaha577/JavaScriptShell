console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

(async () => {
  console.log(3);
  await Promise.resolve();
  console.log(4);
})();

console.log(5);

// 1
// 3
// 5
// 4
// 2

// console.log(1), console.log(3), and console.log(5) run synchronously.
// The await adds the continuation (console.log(4)) to the micro-task queue.
// Micro-tasks (console.log(4)) are executed before the macro-task (setTimeout).