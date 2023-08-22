/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/

function isEmpty(obj) {
      for (let key in obj){
            // if loop starts, there is a key in obj
            return false;
      } 
      return true;
}

// test 
console.log(isEmpty("hello"));
console.log(isEmpty());
console.log(isEmpty("hell","mell"));