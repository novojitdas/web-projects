/*
Create a class named Person with properties name and age, 
and a method introduce that prints out "Hi, my name is [name] and I am [age] years old."
*/

class Person {
      constructor (name,age) {
            this.name = name;
            this.age = age;
      }

      // method
      introduce() {
            console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
      }
}

//creating new obj 
const alia = new Person("alia",30);
const naina = new Person("naina",28);
//test
alia.introduce();
naina.introduce();