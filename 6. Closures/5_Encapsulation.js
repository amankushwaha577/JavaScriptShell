function counter() {
  let count = 0;
  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    },
    getCount: function() {
      return count;
    }
  };
}

const myCounter = counter();
myCounter.increment(); // 1
myCounter.increment(); // 2
myCounter.decrement(); // 1
console.log(myCounter.getCount()); // 1

// Explanation:
// ---------------------
// The closure encapsulates the count variable, allowing it to be modified only via the provided methods. 
// This keeps the count private and protected from direct external access.
