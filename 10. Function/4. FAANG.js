/* 
Que1. What is the difference between a function declaration and a function expression?
Ans.    a. Function Declaration is hoisted.
        b. Function Expression is not hoisted. */
        function greet() {
            return "Hello";
        }
        const greetExp = function() {
            return "Hello from expression";
        };


/* 
Que2. What is a first-class function? 
Ans.  Functions can be assigned to variables, passed as arguments, and returned from other functions. */
        const sayHi = () => "Hi";
        function executor(fn) {
            return fn();
        }
        executor(sayHi); // "Hi"


/* 
Que3. Parameters vs Arguments 
Ans. Parameters are variables in function definition.
     Arguments are actual values passed. */
        function add(a, b) { // a, b = parameters
            return a + b;
        }
        add(2, 3); // 2, 3 = arguments


/* 
Que4. What are default parameters in JavaScript? 
Ans.  Allows setting default values if no value or undefined is passed. */
        function welcome(name = "Guest") {
            return `Hello, ${name}`;
        }


/* 
Que5. How does hoisting work with functions? 
Ans.  Function declarations are hoisted, function expressions are not. */
        sayHello(); // works
        function sayHello() {
            console.log("Hello!");
        }


/* 
Que6. What is the difference between call(), apply(), and bind()? 
Ans.  All change the value of this:
      - call: fn.call(context, arg1, arg2)
      - apply: fn.apply(context, [args])
      - bind: returns new function with bound this */
        function showName() {
            console.log(this.name);
        }
        const person = { name: "Alice" };
        showName.call(person); // Alice
        showName.apply(person); // Alice
        const boundFn = showName.bind(person);
        boundFn(); // Alice


/* 
Que7. What is a closure? Give example.
Ans.  A closure is a function that remembers variables from its outer scope. */
        function outer() {
            let count = 0;
            return function() {
                count++;
                return count;
            };
        }
        const counter = outer();
        counter(); // 1
        counter(); // 2


/* 
Que8. What is an IIFE and why use it?
Ans.  Immediately Invoked Function Expression, used to create private scope. */
        (function() {
            console.log("Runs immediately");
        })();


/* 
Que9. How does this behave in regular vs arrow functions?
Ans.  Regular: this is dynamic (depends on caller)
      Arrow: this is lexical (inherits from parent scope) */
        const obj = {
            name: "JS",
            regular: function() {
                console.log(this.name); // "JS"
            },
            arrow: () => {
                console.log(this.name); // undefined
            }
        };


/* 
Que10. What is the difference between lexical and dynamic scope?
Ans.   JavaScript uses lexical scope (scope determined at declaration, not at runtime). */


/* 
Que11. How do you create a private variable using closures?
Ans.   Define variables in outer function and return inner function to access them. */
        function secretHolder() {
            let secret = "shhh";
            return {
                getSecret: () => secret
            };
        }
        const secret = secretHolder();
        secret.getSecret(); // "shhh"


/* 
Que12. What are higher-order functions? Example?
Ans.   Functions that take other functions as arguments or return them. */
        const numbers = [1, 2, 3];
        const doubled = numbers.map(x => x * 2); // [2, 4, 6]


/* 
Que13. What is currying? Show an example.
Ans.   Breaking function of many args into chained single-arg functions. */
        function curry(a) {
            return function(b) {
                return function(c) {
                    return a + b + c;
                };
            };
        }
        curry(1)(2)(3); // 6


/* 
Que14. Pure vs Impure functions
Ans.   Pure: same input → same output, no side effects.
        Impure: may use or modify outer scope. */
        function pure(x) {
            return x * 2;
        }
        let count = 0;
        function impure(x) {
            count++;
            return x + count;
        }


/* 
Que15. Why aren't arrow functions suitable for object methods?
Ans.   Arrow functions don’t bind their own this, so it refers to outer scope. */
        const badObj = {
            name: "Arrow",
            greet: () => console.log(this.name) // undefined
        };
        badObj.greet();


/* 
Que1. Factorial using recursion */
        function factorial(n) {
            if (n === 0) return 1;
            return n * factorial(n - 1);
        }


/* 
Que2. Counter using closure */
        function createCounter() {
            let count = 0;
            return function() {
                return ++count;
            };
        }


/* 
Que3. Custom bind implementation */
        Function.prototype.myBind = function(context, ...args1) {
            const fn = this;
            return function(...args2) {
                return fn.apply(context, [...args1, ...args2]);
            };
        };


/* 
Que4. Debounce implementation */
        function debounce(fn, delay) {
            let timer;
            return function(...args) {
                clearTimeout(timer);
                timer = setTimeout(() => fn.apply(this, args), delay);
            };
        }


/* 
Que5. Throttle implementation */
        function throttle(fn, limit) {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    fn.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        }


/* 
Que6. Currying example */
        function sum(a) {
            return function(b) {
                return function(c) {
                    return a + b + c;
                };
            };
        }
        sum(1)(2)(3); // 6


/* 
Que7. Memoize function */
        function memoize(fn) {
            const cache = {};
            return function(n) {
                if (cache[n]) return cache[n];
                const result = fn(n);
                cache[n] = result;
                return result;
            };
        }


/* 
Que8. Limit function calls */
        function limitCalls(fn, maxCalls) {
            let calls = 0;
            return function(...args) {
                if (calls >= maxCalls) return;
                calls++;
                return fn.apply(this, args);
            };
        }


/* 
Que9. What happens with fewer or extra arguments? */
        function logArgs(a, b) {
            console.log(a, b);
        }
        logArgs(1); // 1 undefined
        logArgs(1, 2, 3); // 1 2


/* 
Que10. How do arrow functions behave with arguments object?
Ans.   Arrow functions do NOT have their own 'arguments' object. */
        const arrow = () => {
            console.log(arguments); // ReferenceError
        };


/* 
Que11. Converting to arrow but keeping behavior?
Ans.   Only convert when 'this' or 'arguments' is not used. */


/* 
Que12. Rest vs arguments object */
        function restArgs(...args) {
            return args;
        }
        function traditional() {
            return arguments;
        }
