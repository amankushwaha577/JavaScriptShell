Function.prototype.myBind = function(){
    console.log("Hi Aman");
}
// HERE we have set 'myBind' method in "prototype of Function Constructor"

fun.__proto__ === Function.prototype // true : chunki



// Now all functions can acess myBind method
function fun(){

}
// Now myBind() method will be available in __proto__ of all custom functions.

fun.__proto__.myBind() // Hi Aman
// To access that method in our __proto__ of function

fun.__proto__
// We know Function prototype is also in form of function
// so we will get op like -
// op: ƒ () { [native code] }

fun.myBind() // Hi Aman
// First JS engine searches myBind in keys of fun object => Not Found
// Now enters in __proto__. and here myBind is there so just stop here
