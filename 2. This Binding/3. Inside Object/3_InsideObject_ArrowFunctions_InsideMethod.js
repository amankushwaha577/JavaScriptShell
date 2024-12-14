const obj = {
  name: 'Aman',
  getName: function () {
    const arrowFn = () => {
      console.log(this.name);
    };
    arrowFn();
  },
};
obj.getName();

// Output: 'Aman'

// Explanation: Arrow functions do not have their own this; 
// they inherit it from their lexical scope. Here, this inside the arrow function refers to the obj.
