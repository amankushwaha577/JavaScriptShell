const obj = {
  *gen() {
    console.log(this);
  },
};
obj.gen().next();

// Output: obj (the object that owns the generator).

/*
3. When Used as a Method of an Object:
-------------------------------------
If the generator is a method of an object, this refers to the object that owns the generator. */