function Calculator() {

      this.read = function (){
      this.num1 = +prompt("Please Enter First Number:",0);
      this.num2 = +prompt("Please Enter Second Number:",0);
      };

      this.sum = function(){
        return this.num1 + this.num2;
      };

      this.mul = function(){
        return this.num1 * this.num2;
      };

}

let calculator = new Calculator();
calculator.read();

alert("Sum is "+calculator.sum());
alert("Mul is "+calculator.mul());