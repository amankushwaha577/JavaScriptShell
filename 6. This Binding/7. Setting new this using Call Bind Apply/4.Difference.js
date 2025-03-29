
/*
 Feature          | call                                         | apply                              | bind
 ---------------- ------------------------------------------------------------------------------------
 Invocation       | Invokes the function immediately.            | Invokes the function immediately.  | Returns a new function (does NOT invoke immediately).
 ---------------- ------------------------------------------------------------------------------------
 Arguments Format | Arguments are passed individually.           | Arguments are passed as an array.  | Arguments can be pre-set during binding or passed later.
 ---------------- ------------------------------------------------------------------------------------
 Return Value     | Returns the result of the function.          | Returns the result of the function.| Returns a new function with `this` and optional arguments pre-set.
 ---------------- ------------------------------------------------------------------------------------ / */

/* 1. Using call:
----------------*/
            function greet1(greeting, punctuation) {
                return `${greeting}, ${this.name}${punctuation}`;
            }
            const person1 = { name: 'Alice' };
            console.log(greet1.call(person1, 'Hello', '!')); 
            // Output: "Hello, Alice!"


/* 2. Using apply:
----------------*/
       function greet2(greeting, punctuation) {
           return `${greeting}, ${this.name}${punctuation}`;
       }
       const person2 = { name: 'Alice' };
       console.log(greet2.apply(person2, ['Hello', '!'])); 
       // Output: "Hello, Alice!"


/* 3.Using bind:
----------------*/
       function greet3(greeting, punctuation) {
           return `${greeting}, ${this.name}${punctuation}`;
       }
       const person3 = { name: 'Alice' };
       const boundGreet = greet3.bind(person3, 'Hello');
       console.log(boundGreet('!')); 
       // Output: "Hello, Alice!"

       
/*
1. `call` is for immediate execution with individual arguments.
2. `apply` is for immediate execution with arguments in an array.
3. `bind` is for creating a new function that can be executed later with a fixed `this`.
*/