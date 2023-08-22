/* define a pow function where x is variable and n is power */

function pow(x,n) {
      let result = x;

      for (let i = 1; i < n; i++) {
            result = result * x;
      }

      return result;
}

let x = prompt("please enter the value: ");
let n = prompt("please enter the power: ");

if (n < 1) 
{
      alert(`Sorry! power can't be negative or zero. you entered ${n}`);

} else {
      alert(`Result is ${pow(x,n)}`);
}