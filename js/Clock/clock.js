
// clock logic starts here //
class Clock {

      constructor({template}){
         this.template = template;
      }
   
      render() {
        let date = new Date();
   
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
   
        let mins = date.getMinutes();
        if(mins < 10) mins = '0' + mins;
   
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
   
        let output = this.template
           .replace('h', hours)
           .replace('m', mins)
           .replace('s', secs);

      const h1 = document.createElement('h1');
      h1.style.color= 'white';
      h1.textContent = output;
      const grid = document.querySelector('.grid');
      grid.innerHTML = '';
      grid.appendChild(h1); 
      }
   
      stop() {
       clearInterval(this.timer);
      };
   
      start(){
       this.render();
       this.timer = setInterval(() => this.render(), 1000);
      };
   }

 
let clock = new Clock({template: 'h:m:s'});
clock.start();

const stopButton = document.querySelector('#stop');
stopButton.addEventListener('click',(event) => {
      clock.stop();
});

const restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', (event) =>{
      clock.start();
});

// clock logic ends here // 

