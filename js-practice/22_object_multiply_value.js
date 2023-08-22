/*
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.
*/

let menu = {
      width:200,
      height:400,
      title: "my menu"
};

function multiplyTwo(obj) {
      obj;
      for (key in obj) {
            if('number' == typeof(obj[key])){
                  obj[key] = obj[key] * 2;
                  console.log(`key is ${key} and value ${obj[key]}`);
            }
      }
}


// test 
multiplyTwo(menu);
