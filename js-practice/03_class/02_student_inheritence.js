/* Create a class Student that inherits from Person. 
Add a property studentId and override the introduce method to include the student ID.
*/
class Person {
      constructor (name,age){
            this.name = name;
            this.age = age;
      }
      //method 
      introduce() {
            console.log(`my name is ${this.name} & my age ${this.age}.`);
      }
}

//creating obj
aliaPerson = new Person("alia",30);
//test 
aliaPerson.introduce();

// now creating new class student, which wil inherit the class person
class Student extends Person {
      constructor (name, age, studentId){
            super (name,age);
            this.studentId = studentId;
      }

      introduce() {
            console.log(`name ${this.name} & my age ${this.age} & studentId ${this.studentId}`);
      }
}

const student = new Student("Alia",21,223);
student.introduce();