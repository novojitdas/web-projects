function User(name) {
      this.name = name;
    }
    
    let pete = new User("pete");
    console.log(pete.name); // pete
    let peter = new pete.constructor("peter");
    console.log(peter.name); // peter
    
    User.prototype = {};
    let pit = pete.constructor("pit");
    console.log(pit.name); // undefined