let object = {
    name : "Aman",
    city: "Gurgaon",
    getInfo : function (){
        console.log(this.name + " from " + this.city);
    }
}

let object2 ={
    name: "Ankit" 
}

// Never do this : performance issue
object2.__proto__ = object; // object2 inheriting properties of object

object2.name // Ankit
object2.city //Gurgaon
// 1. First JS Engine search city property in object2 => Not found
//    Now it enters into the __proto__ => FOund.
// Note : If was not found it will enter __proto__ of __proto__ ans so on...

object2.getInfo() //Ankit from Gurgaon
// 1. First JS Engine searches getInfo() Function in Object2 => Not found.
//    Now it enters into the __proto__ => FOund.
//    Great! Call It.
// 2. First JS Engine search name property in object2 => found
// 3. than : JS Engine search city property in object2 => Not found
//    Now it enters into the __proto__ => FOund.

