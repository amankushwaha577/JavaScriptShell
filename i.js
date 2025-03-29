const obj = {
    name: 'Aman',
    getName: () => {
      console.log(this.name);
    },
  };
obj.getName();