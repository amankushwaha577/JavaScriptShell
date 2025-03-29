function test() {
    if (true) {
      var a = 10;
      let b = 20;
      const c = 30;
    }
    console.log(a); // 10
    console.log(b); // ReferenceError
    console.log(c); // ReferenceError
  }
  test();
  

/*
1. console.log(a): 10
   var is function-scoped, so it’s accessible throughout the function.

2. console.log(b): ReferenceError
   let is block-scoped and not accessible outside the if block.

3. console.log(c): ReferenceError
   const is also block-scoped, just like let.
*/