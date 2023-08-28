const buttons = document.querySelectorAll('button');
const screen = document.querySelector('#screen');
let screentext ='';
buttons.forEach( (button) => {
      button.addEventListener('click',(event) =>{
            buttonText = event.target.innerText;
            if (buttonText === 'C'){
                  screentext = '';
                  screen.value = screentext;
            } else if (buttonText === '=') {
                  screen.value = eval(screentext);
            } else if (buttonText === 'X') {
                  screentext += '*';
                  screen.value = screentext;
            } else {
                  screentext += buttonText;
                  screen.value = screentext;
            }
      });
});