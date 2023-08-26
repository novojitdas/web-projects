// find the sum of array
function findSum (arr) {
      sum = 0;
      for (let num of arr){
            sum += num;
      }
      return sum;
}

const numbers = [1,2,3,4,5,6];
console.log(findSum(numbers));