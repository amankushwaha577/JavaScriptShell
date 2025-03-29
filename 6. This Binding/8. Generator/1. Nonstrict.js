// 1. In the Global Context:
function* gen() {
  console.log(this);
}
gen().next();

// Op: same like functions
// In browsers: Window object.
// In Node.js : global object (the global object in Node.js)..


/*
Key Takeaways for Non-Strict Mode : It's same like regular function.
----------------------------------

1. By default, this in a generator function refers to the global object (window in browsers, global in Node.js) when the generator is invoked in the global context.
2. If the generator is invoked with an explicit this binding (call, apply, or bind), this will refer to the bound value.
3. If the generator is a method of an object, this refers to the object that owns the generator.
*/