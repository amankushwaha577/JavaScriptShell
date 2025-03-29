const obj1 = {
  name: 'Aman',
  getName: function () {
    return this.name;
  },
};

const obj2 = { name: 'Flipkart' };

console.log(obj1.getName.call(obj2));

// Output: 'Flipkart'

// Explanation: Using call, we explicitly bind 'this' of obj1 to obj2.
