function delayedMessage() {
  let message = "Hello, after 2 seconds!";
  setTimeout(function() {
    console.log(message);
  }, 2000);
}

delayedMessage(); // "Hello, after 2 seconds!"

/*
Explanation:
------------
The setTimeout function retains access to the message variable from the outer function's scope, 
even though the function has already finished execution. 
This is a closure in action with asynchronous code. */