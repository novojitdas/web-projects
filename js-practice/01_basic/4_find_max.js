function findMax(num1,num2,num3) {
     if (num1 > num2 && num1 > num3) {
           return num1;
     } else if (num2 > num1 && num2 > num3){
           return num2;
     } else if (num3 > num1 && num3 > num2) {
           return num3;
     } else {
           return "one parameter is wrong";
     }
}

console.log(findMax(1,2,3));
console.log(findMax(6,5,4));
console.log(findMax(5,4,3));

