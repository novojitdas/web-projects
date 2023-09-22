/*
Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. 
Include two methods to calculate rectangle area and perimeter. 
Create an instance of the 'Rectangle' class and calculate its area and perimeter
*/

class Rectangle {
      constructor (width,height){
            this.width = width;
            this.height = height;
      }
      area() {
            return this.width*this.height;
      }
      perimeter() {
            return 2 * (this.width + this.height);
      }

      display() {
            console.log(this.area());
            console.log(this.perimeter());
      }
}

crtTv = new Rectangle(21,21);
monitor = new Rectangle(21,12);

crtTv.display();
monitor.display();