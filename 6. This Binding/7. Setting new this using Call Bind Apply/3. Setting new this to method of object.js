const obj1 = {
  name: 'Aman',
  sname: 'kushwaha',
  getName: function () {
    return this.name + " " + this.sname;
  },
};

const obj2 = { name: 'Flipkart' };

// Bind obj2 to obj1's getName method
const boundGetName = obj1.getName.bind(obj2);

// Call the bound function
console.log(boundGetName());

// op : "Flipkart undefined"

/*
The bind method creates a new function where this is permanently set as provided value (obj2 in this case).
Unlike call or apply, bind does not invoke the function immediately. Instead, it returns a new function that can be invoked later.

a. obj1.getName.bind(obj2):
   A new function (boundGetName) is created, with this permanently bound to obj2.

b. boundGetName():
   When the boundGetName function is called, it uses obj2 as this.
   this.name evaluates to 'Flipkart undefined'. */

