function add(num1,num2, callback){
      let sum = num1 + num2;
      if(callback){
            callback(sum);
      } 
      return sum;    
}

function display(sum){
      console.log(`result using display function -> ${sum}`);
}

let result = add(5,5);
console.log(`result using function call -> ${result}`);
// using callback 
add(5,5,display);
/* OUTPUT:
result using function call -> 10
result using display function -> 10
*/
