console.log(typeof sum);
var sum = function(a, b) {
  return a + b;
};

// Output: undefined
// Explanation: Variable sum is hoisted as undefined.
//              type of undefined is undefined.



(function(a, b) {
    console.log(a + b);
  })(5, 7);
  
// Output: 12
// Explanation: It’s an Immediately Invoked Function Expression (IIFE).



const person = {
    name: "John",
    greet: () => console.log(`Hello, ${this.name}`)
  };
  person.greet();

//  Output: Hello, undefined
//  Explanation: Arrow functions don’t bind their own this.



function demo(a = 1, b = a * 2) {
    console.log(a, b);
  }
  demo(3);

// Output: 3 6
// Explanation: Default value of b is calculated as a * 2.



function add(a, ...nums) {
    console.log(nums);
  }
  add(1, 2, 3, 4);

// Output: [2, 3, 4]
// Explanation: ...nums collects all additional arguments.



const calculate = (a, b = 5, c = 10) => a + b + c;
console.log(calculate(20));

// Output: 35
// Explanation: Default values of b and c are used.



console.log(test);
function test() {
  return "hello";
}

// Output: ƒ test() { return "hello"; }
// Explanation: Function declarations are hoisted.



console.log(test);
var test = function() {
  return "hello";
};

// Output: undefined
// Explanation: Variable test is hoisted as undefined.

  