const obj1 = {
  name: 'Aman',
  sname:'kushwaha',
  getName: function () {
    return this.name + " "+ this.sname;
  },
};

const obj2 = { name: 'Flipkart' };

// Use apply to call obj1's getName method with obj2 as this
console.log(obj1.getName.apply(obj2));

// Output: "Flipkart undefined"

// Comparison Between call and apply:
// call: Pass arguments individually: func.call(thisArg, arg1, arg2, ...).
// apply: Pass arguments as an array: func.apply(thisArg, [arg1, arg2, ...]).
// In this case, since there are no arguments passed to getName, call and apply work identically.