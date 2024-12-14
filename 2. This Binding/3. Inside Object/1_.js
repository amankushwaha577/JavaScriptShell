'use strict' // No Effect of strict mode on object's this
const obj = {
    name: 'Aman',
    getName: function () {
      console.log(this.name);
    },
  };
  obj.getName();
  

// Output: 'Aman'

// Explanation: Inside an object method, this refers to the object itself.