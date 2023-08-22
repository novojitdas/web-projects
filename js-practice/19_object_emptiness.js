/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/
obj = new Object(); // object constructor

function isEmpty (obj){
      obj;
      if(obj === undefined){
            return true;
      }
      else {
            return false;
      }
}

 console.log(isEmpty());
 console.log(isEmpty("name"));