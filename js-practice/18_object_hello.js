/* 
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

*/
let user = new Object(); // object constructor
user = {};

// add name & surname;
user.name = "John";
user.surname = "Smith";
console.log(user.name);
console.log(user.surname);

// updating name
user.name = "Pete";
console.log(user.name);
console.log(user.surname);

// remove name property
delete user.name;
console.log(user.name);

