/*
Q. 1. What is a Prototype?
Ans. Whenever we create any var/object in JS, than JS engine attaches an object to our custom created object.
     this object contains set of properties that is called [[Prototype]] object.
     A prototype acts as a blueprint for objects.

Q. 2. What is a _proto_?
Ans.  To access that hidden object we uses property _proto_
      _proto_ provides reference to the prototype object.  */




// -------------------------------- Object Constructor----------------------------------------------------------
Object // Op: ƒ Object() { [native code] }
// Object is a built in Keyword

Object.prototype // OP: LIST of object methods
// Object keyword have proprty prototype which contains list of methods

// So all our data type / all variables  whatever we create in JS internally inherits these properties
// ------------------------------------------------------------------------------------------------------------




let arr1= ["Aman", "kushwaha"]

// 1. If you do arr1. =>
// ---------------------------------------------------------------- 
//    => You will get every single property of Array ( of Only Array ) like .length, .map(), .filter(), .reduce()                                
//    => At the bottom of all elements you will get [[Prototype]] all those properties of Array will also be here ( Of Only Array )

// 2. If you do arr1.__proto__ =>
// ----------------------------------------------------------------
//    => You will get all those ( Of Only Array ) properties in array form [.length, .map(), .filter(), .reduce(), ......]

// 3. If you do Array.prototype => Same Result. 
// ----------------------------------------------------------------
//    => You will get all those ( Of Only Array ) properties in array form [.length, .map(), .filter(), .reduce(), ......]

arr1.__proto__ === Array.prototype // true
// Set of Array Property === set of Array Property




let obj1 = {
    name : "Aman",
    city: "Gurgaon",
    getInfo : function (){
        console.log(this.name + " from " + this.city);
    }
}

// 1. If you do obj1. =>
// ---------------------------------------------------------------- 
//    => You will get every single property of Object ( of Only Object ) like .valueOf(), .toString(), .hasOwnProperty(), .isPrototypeOf()
//    => At the bottom of all elements you will get [[Prototype]] all those properties of Object will also be here ( Of Only Object )

// 2. If you do obj1.__proto__ =>
// ----------------------------------------------------------------
//    => You will get all those ( Of Only Object ) properties in Object form [.valueOf(), .toString(), .hasOwnProperty(), .isPrototypeOf() ..]

// 3. If you do Object.prototype =>
// ----------------------------------------------------------------
//    => You will get all those ( Of Only Object ) properties in Object form [.valueOf(), .toString(), .hasOwnProperty(), .isPrototypeOf() ..]

obj1.__proto__ === Object.prototype // true
// Set of Object Property === set of Object Property





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
// Set of Function Property === set of Function Property




let str1 = "Hello, World!";

// 1. If you do str1. =>
// ---------------------------------------------------------------- 
//    => You will get every single property of String (of Only String) like .length, .toUpperCase(), .toLowerCase(), .slice()                                
//    => At the bottom of all elements, you will get [[Prototype]] where all those properties of String will also be present (of Only String).

// 2. If you do str1.__proto__ =>
// ----------------------------------------------------------------
//    => You will get all those (of Only String) properties in object form like 
//       [.length, .toUpperCase(), .toLowerCase(), .slice(), ......]

// 3. If you do String.prototype =>
// ----------------------------------------------------------------
//    => You will get all those (of Only String) properties in object form like 
//       [.length, .toUpperCase(), .toLowerCase(), .slice(), ......]

str1.__proto__ === String.prototype // true
// Set of String Properties === Set of String Properties




let num1 = 42;
// 1. If you do num1. =>
// ---------------------------------------------------------------- 
//    => You will get every single property of Number (of Only Number) like .toFixed(), .toExponential(), .toPrecision()                                
//    => At the bottom of all elements, you will get [[Prototype]] where all those properties of Number will also be present (of Only Number).

// 2. If you do num1.__proto__ =>
// ----------------------------------------------------------------
//    => You will get all those (of Only Number) properties in object form like 
//       [.toFixed(), .toExponential(), .toPrecision(), ......]

// 3. If you do Number.prototype =>
// ----------------------------------------------------------------
//    => You will get all those (of Only Number) properties in object form like 
//       [.toFixed(), .toExponential(), .toPrecision(), ......]

num1.__proto__ === Number.prototype // true
// Set of Number Properties === Set of Number Properties





// -----------------------------Note For Understanding --------------------------------------------
// BUt when you do arr1. / obj1. / fun. than you will get their property + Object properties
// because every data type is also having  Object Prototype 
// ----------------------------------------------------------------------------------------------- 



