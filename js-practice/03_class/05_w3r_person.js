/*
Write a JavaScript program to create a class called "Person" 
with properties for name, age and country. 
Include a method to display the person's details. 
Create two instances of the 'Person' class and display their details
*/

class Person {
      constructor(name,age,country){
            this.name = name;
            this.age = age;
            this.country = country;
      }
      displayDetails(){
            console.log(`This person's name is ${this.name},age ${this.age},${this.country}`);
      }
};

person1 = new Person('Novojit',20,'Bangladesh');
person2 = new Person('Das',21,'China');

person1.displayDetails();
person2.displayDetails();
