
function fun() {
  return 7 
}
// 1. If you do fun. =>
// ---------------------------------------------------------------- 
//    => You will get every single property of Function ( of Only Function ) like .name(), .call(), .apply(), .bind()
//    => At the bottom of all elements you will get [[Prototype]] all those properties of Function will also be here ( Of Only Function )

// 2. If you do fun.__proto__ =>
// ----------------------------------------------------------------
//     => The Function.prototype itself is a function (technically, the function constructor), so its string representation is ƒ () { [native code] }.
//     => However all properties like .name(), .call(), .apply(), .bind()] are there behind the scene
//        so op : ƒ () { [native code] }

// 3. If you do Function.prototype =>
// ----------------------------------------------------------------
//     => The Function.prototype itself is a function (technically, the function constructor), so its string representation is ƒ () { [native code] }.
//     => However all properties like .name(), .call(), .apply(), .bind()] are there behind the scene
//        so op : ƒ () { [native code] }

fun.__proto__ === Function.prototype // true