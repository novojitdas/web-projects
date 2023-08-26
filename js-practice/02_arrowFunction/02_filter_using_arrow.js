// Given an array of numbers, 
// use an arrow function to filter out all the even numbers 
// and create a new array containing only the odd numbers.


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = (numbers) => {
    const odd = [];
    for (let i of numbers) {
        if (i % 2 === 1) {
            odd.push(i);
        }
    }
    return odd;
};

console.log(oddNumbers(numbers));