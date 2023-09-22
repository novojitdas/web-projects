/*Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area.
 Create two subclasses, 'Circle' and 'Triangle', 
 that inherit from the 'Shape' class and override the area calculation method. 
 Create an instance of the 'Circle' class and calculate its area. 
 Similarly, do the same for the 'Triangle' class.
*/
class Shape {
      constructor(height,width){
            this.height = height;
            this.width = width;
      }
      calculateArea() {
            return this.height*this.width;
      }
}

class Circle extends Shape {
      constructor(radius){
            super();
            this.radius = radius;
      }
      calculateArea(){
            return 3.1416 * this.radius * this.radius;
      }
}

class Triangle extends Shape {
      constructor(height,width){
            super(height,width);
      }
      calculateArea(){
            return (this.height * this.width)/2;
      }
}

const circleObj = new Circle(2);
const triangleObj = new Triangle(2,3);
console.log(`area of circle ${circleObj.calculateArea()}`);
console.log(`area of a triangle ${triangleObj.calculateArea()}`);