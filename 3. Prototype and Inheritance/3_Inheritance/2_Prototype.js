Function.prototype.myBind = function(){
    console.log("Hi Aman");
}
// HERE we have set 'myBind' method in "prototype of Function Constructor"

// Now all functions can acess myBind method
function fun(){

}

fun.__proto__.myBind() // Hi Aman
// To access that method in our __proto__ of function

fun.__proto__
// Actually function dont gives properties in __proto__
// so we will get op like -
// op: ƒ () { [native code] }

fun.myBind() // Hi Aman
// first it will try to acess __proto__ of fun. and here itself myBind is there so just stop here
