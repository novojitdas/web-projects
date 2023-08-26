function findMax(arr) {
      let max = arr[0];
      for (num of arr){
         max = (max <= num) ? num : max;
      }
      return max;
}

const arr = [23,11,5,23,27,25];
console.log(findMax(arr));