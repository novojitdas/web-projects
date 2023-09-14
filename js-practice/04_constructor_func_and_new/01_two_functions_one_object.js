// s it possible to create functions A and B so that new A() == new B()?

let obj = {}; // empty object

function A(){return obj;}
function B(){return obj;};

// If a function returns an object then new returns it instead of this.

if (new A()===new B()){
      console.log("equals");
}
else {
      console.log("not equal");
}