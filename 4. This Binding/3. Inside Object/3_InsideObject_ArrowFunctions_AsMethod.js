const obj = {
    name: 'Aman',
    getName: () => {
      console.log(this.name);
    },
  };
obj.getName();

// Output: undefined

// Explanation: Arrow functions don’t have their own this and inherit this from the surrounding context (global scope here).