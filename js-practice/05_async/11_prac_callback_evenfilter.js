const evenOps = (arr,callback) => {
     const newArr = [];
     for(let i = 0; i<arr.length; i++){
     if (arr[i]%2==0){
          newArr.push(callback(arr[i]));
     }
}
      return newArr;
}

const square = (num) => {
      return num*num;
};

const double = (num) => {
      return num*2;
};


const numbers = [1,2,3,4,5];
console.log(evenOps(numbers,square));
console.log(evenOps(numbers,double));
