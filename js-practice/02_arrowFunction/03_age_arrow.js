/*
Given an array of user objects with name and age properties, 
use an arrow function to create a new array 
containing only the names of users who are older than 30.
*/
const users = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 40 },
      { name: 'Charlie', age: 32 },
      { name: 'David', age: 28 }
    ];

const names = (users) => {
      const namesArr = []; 
      for(let user of users){
            if (user.age > 30){
                  namesArr.push(user.name);
            }
      }
      return namesArr;
};

console.log(names(users));