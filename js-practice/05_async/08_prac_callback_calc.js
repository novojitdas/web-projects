// calculator using callback 
const calculatorFn = (num1,num2,callback) => {
      return callback(num1,num2);
};

const add = (a,b) => {
      return a+b;
};

const sub = (a,b) => {
      return a-b;
}

const mul = (a,b) => {
      return a*b;
}

const divide = (a,b) => {
      if ( b == 0){
            return `can't divide by zero`;
      }
      return a/b;
}

console.log(calculatorFn(5,3,add));
console.log(calculatorFn(5,3,sub));
console.log(calculatorFn(5,3,mul));
console.log(calculatorFn(5,3,divide));