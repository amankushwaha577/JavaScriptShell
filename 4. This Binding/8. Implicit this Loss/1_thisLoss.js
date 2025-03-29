const obj = {
    name: 'Aman',
    getName: function () {
      return this.name;
    },
  };
  const getName = obj.getName;
  console.log(getName());
  

// Output: undefined

// Explanation: When a method is assigned to a variable, 
//              this is lost and defaults to the global object (or undefined in strict mode).