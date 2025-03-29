const obj1 = {
  name: 'Aman',
  sname:'kushwaha',
  getName: function () {
    return this.name + " "+ this.sname;
  },
};

const obj2 = { name: 'Flipkart' };

console.log(obj1.getName.call(obj2));

// Output: "Flipkart undefined"

/*
Explanation: Using call, we explicitly set the value of 'this' to obj2.
------------

1. call allows you to explicitly set the value of this.
2. If the object provided to call does not have the expected properties, 
   accessing those properties will result in undefined. */