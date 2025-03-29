/* 
Promise.race() Resolves as soon as the fastest promise settles.

1. Reolve using .then:
---------------------*/
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promise1, promise2, promise3]).then((result) => {
  console.log("Promise.race:", result);
});
// OP: Promise.race: 1 (Since promise1 resolves first after 1 second)


/* 2. Using async-await with Promise.race:
-----------------------------------------*/
async function fetchFirst() {
  const result = await Promise.race([promise1, promise2, promise3]);
   // Promise.race() takes array of Promises & waits for any one of the fastest promises to resolve. 
   // It returns first fastest promises, that resolved.

  console.log("Async Await - Promise.race:", result);
}
fetchFirst();
// OP: Async Await - Promise.race: 1 (Takes 1 second)
