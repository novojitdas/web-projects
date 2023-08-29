const grid = document.querySelector('.grid');
const restartButton = document.querySelector('.button');


createGrid = () => {
      for(let i=0; i<256; i++){
            const div = document.createElement('div');
            div.classList.add('cell');
            // mouseover
            div.addEventListener('mouseover', (event) =>{
                  event.target.style.backgroundColor = 'black';
                  console.log(i);
            })
            // reset
            restartButton.addEventListener('click',(event) =>{
                        div.style.backgroundColor = 'white';
                        console.log(`reset ${i}`);
            });
            grid.appendChild(div);
      }
};
// calling createGrid Function
createGrid();



