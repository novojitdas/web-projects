function closure() {
      let counter=0;

      return function(){
            counter = counter+1;
            return counter;
      }
}

const add = closure();
console.log(add()); // 1
add(); // 2
add(); // 3
console.log(add()); // 4