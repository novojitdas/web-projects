// factorial using recurrsion 
function factorial(num) {
      if (num === 0 || num === 1){
            return 1;
      }
      return num * factorial(num - 1);    
}

console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(8));
