function greeting(message) {
  return function(name) {
    console.log(message + ", " + name);
  };
}

const greetHello = greeting("Hello");
greetHello("John"); // "Hello, John"

// Explanation:
// The returned greetHello function is a closure that retains the message parameter from the greeting function.




const greetHello2 = greeting("Hello");
greetHello2(); // "Hello, John"
