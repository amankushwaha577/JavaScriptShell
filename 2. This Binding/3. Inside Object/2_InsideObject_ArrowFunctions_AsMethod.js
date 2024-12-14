const obj = {
    name: 'Ananya',
    getName: () => {
      console.log(this.name);
    },
  };
  obj.getName();
  