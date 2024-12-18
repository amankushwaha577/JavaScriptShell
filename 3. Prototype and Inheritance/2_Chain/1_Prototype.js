let arr1= ["Aman", "kushwaha"]

// 1. If you do arr1. =>
// ---------------------------------------------------------------- 
//    => You will get every single property of Array ( of Only Array )
//       like .length, .map(), .filter(), .reduce()
//    => At the bottom of all elements you will get [[Prototype]]
//       all those properties of Array will also be here ( Of Only Array )

// 2. If you do arr1.__proto__ =>
// ----------------------------------------------------------------
//    => You will get all those ( Of Only Array ) properties in array form.
//       [.length, .map(), .filter(), .reduce(), ......]




let obj1 = {
    name : "Aman",
    city: "Gurgaon",
    getInfo : function (){
        console.log(this.name + " from " + this.city);
    }
}

// 1. If you do obj1. =>
// ---------------------------------------------------------------- 
//    => You will get every single property of Object ( of Only Object )
//       like .valueOf(), .toString(), .hasOwnProperty(), .isPrototypeOf()
//    => At the bottom of all elements you will get [[Prototype]]
//       all those properties of Object will also be here ( Of Only Object )

// 2. If you do obj1.__proto__ =>
// ----------------------------------------------------------------
//    => You will get all those ( Of Only Object ) properties in Object form.
//       [.valueOf(), .toString(), .hasOwnProperty(), .isPrototypeOf() ......]

