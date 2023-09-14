const manipulateArr = (arr,callback) => {
      const newArr = [];
      for (let i = 0; i<numbersArr.length;i++) {
            newArr.push(callback(arr[i]));
      }
      return newArr;
};

const double = (element) => {
      return element * 2;
}

const numbersArr = [1,2,3,4,5];
const doubledNumbers = manipulateArr(numbersArr,double);
console.log(doubledNumbers);