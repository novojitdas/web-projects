class Animal {
      constructor(name){
            this.speed = 0;
            this.name = name;
      }

      run(speed){
            this.speed = speed;
            console.log(`${this.name} this running at ${this.speed} speed`);
      }

      stop(){
            console.log(`${this.name} stops!`);
      }

}
// class Child extends Parent
class Rabbit extends Animal {
      hide(){
            console.log(`${this.name} is now hiding`);
      }
}

let whiteRabbit = new Rabbit("white rabbit");

whiteRabbit.hide(); // white rabbit is now hiding
whiteRabbit.run(5); // white rabbit this running at 5 speed
whiteRabbit.stop(); // white rabbit stops!