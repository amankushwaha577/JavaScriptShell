function* gen() {
  console.log(this);
}
gen().next();
