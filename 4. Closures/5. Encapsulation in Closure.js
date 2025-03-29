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

/*
Explanation:
---------------------
1. The closure encapsulates the count variable, allowing it to be modified only via the provided methods. 
2. This keeps the count private and protected from direct external access.
3. Means only the defined methods can manipulate count, prevents data Privacy.*/
