function* gen() {
  console.log(this); // Refers to the explicitly bound value 
}
gen.call({ name: "Flipkart" }).next();

// Output: { name: "Flipkart" }.


/*
2. When Explicitly Bound (e.g., using call or bind): 
----------------------------------------------------
Same like functions : 
If you explicitly bind a value to 'this' when calling the generator, that value becomes 'this' inside the generator.*/