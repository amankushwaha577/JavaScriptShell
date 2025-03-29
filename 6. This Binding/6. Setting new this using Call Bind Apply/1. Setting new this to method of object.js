const obj1 = {
  name: 'Aman',
  sname:'kushwaha',
  getName: function () {
    return this.name + " "+ this.sname;
  },
};

const obj2 = { name: 'Flipkart' };

// Use call to call obj1's getName method with obj2 as this
console.log(obj1.getName.call(obj2));

// Output: "Flipkart undefined"

// Key Concepts:
// 1. call allows you to explicitly set the value of this.
// 2. If the object provided to call does not have the expected properties, 
//    accessing those properties will result in undefined.