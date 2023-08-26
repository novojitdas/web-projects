function longestWord(arr){
      let maxLength = 0;
      for (let i of arr){
            if (i.length>maxLength){
                  maxLength = i.length;
            }
      }
      return maxLength;
}

arr1 = ['a','ab','abc']
arr2 = ['a','abdef','abc','ddddddd'];

console.log(longestWord(arr1));
console.log(longestWord(arr2));
