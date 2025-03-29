const obj = {
    name: 'Aman',
    getName: () => {
      console.log(this.name);
    },
  };
obj.getName();

// Output: undefined

// Explanation: Arrow functions don’t have their own this and inherit this from the surrounding context (global scope here).





const obj2 = {
  name: 'Aman',
  getName: function () {
    const arrowFn = () => {
      console.log(this.name);
    };
    arrowFn();
  },
};
obj2.getName();

// Output: 'Aman'

// Explanation: 
// 1. Arrow functions do not have their own this; they inherit it from their lexical scope. 
// 2. So it inherits this from getName() function, which is obj2
//    Here, this inside the arrow function refers to the obj2.
