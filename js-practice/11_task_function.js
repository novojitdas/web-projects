/* 
Write a function called add7 that takes one number and returns that number + 7.
Write a function called multiply that takes 2 numbers and returns their product.
Write a function called capitalize that takes a string and returns that string 
with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
Write a function called lastLetter that takes a string and returns the very last letter of that string:
lastLetter("abcd") should return "d"
*/
function add7(num) {
    num = num + 7;
      return num;
}

function multiply(num1,num2) {
      let product = num1 * num2;
      return product;
}

function capitalize(str) {
      let first = str.charAt(0);
return (first.toUpperCase() + str.slice(1));
}

function lastLetter(str) {
            return str.slice(-1);
}

console.log(add7(7));
console.log(multiply(2,2));
console.log(capitalize('both'));
console.log(lastLetter('abcd')); 

