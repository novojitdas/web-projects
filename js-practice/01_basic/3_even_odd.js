function checkNum(num) {
      if (num % 2 == 0) {
            return "even";
      } else if (num % 2 == 1) {
            return "odd";
      } else {
            return "not a number";
      }
}

console.log(checkNum(4));
console.log(checkNum(5));
console.log(checkNum("s"));
