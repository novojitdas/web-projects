const boxes = document.querySelectorAll('td');
const restartButton = document.querySelector('#button');

// clear boxes 
restartButton.addEventListener("click", (event) =>{
      for (let i=0;i<boxes.length;i++){
            boxes[i].textContent = '';
      }   
});
// game logic
let flag = true;
boxes.forEach(box =>{
      box.addEventListener('click',(event) => {
            console.log(box);
            console.log(flag);
            if((box.textContent === '') && (flag == true)){
                  box.textContent = 'X';
                  flag = false;
            }
            else if((box.textContent === '') && (flag == false)){
                  box.textContent = 'O';
                  flag = true;
            }
            
      });
});