let arr1 = [1,2,3]
let ob1 ={ 
  name :"aman"
}

Object.prototype.heyAll = function(){
  console.log("It's Accessible in All Data type");
}

arr1.heyAll();
// op :It's Accessible in All Data type
ob1.heyAll();
// op :It's Accessible in All Data type


Array.prototype.heyArray = function(){
  console.log("It's Accessible in All Array only");
}

arr1.heyArray();
// op :It's Accessible in All Data type
ob1.heyArray();
// op :TypeError: ob1.heyArray is not a function