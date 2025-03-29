'use strict' // No Effect of strict mode on object's this
const obj = {
    name: 'Aman',
    getName: function () {
      console.log(this.name);
      console.log(this);
    },
  };
  obj.getName();
  

// Output: 'Aman'
//         {name: 'Aman', getName: ƒ}

// Point 1 : Inside an object method, this refers to the object itself.
// Point 2 : There is no effect of strict mode on object's this.