/* Steps
1. new-task button will add a task into not-startd
2. 
3.
*/

const newTaskButton = document.querySelector('#new-task');
// Not Started
// click event of newTaskButton
newTaskButton.addEventListener('click',(event) =>{
     const input = document.querySelector('#input-text');
     const text = input.value;
     //reseting input field
     input.value = ''
     // now creating input and label and adding text to label
     const task = document.createElement('input');
     task.type = 'checkbox';
     const taskLabel = document.createElement('label');
     taskLabel.textContent = text; 
     // now appending into not started
     const notStarted = document.querySelector('#not-started');
     notStarted.appendChild(task);
     notStarted.appendChild(taskLabel);
     // adding new line afte every function call 
     notStarted.appendChild(document.createElement('br'));

     /////////////////////
     // CHECKBOX LOGIC //
     ///////////////////

     const checkBoxButton = document.querySelectorAll('input[type="checkbox"]'); 
console.log(checkBoxButton);

checkBoxButton.forEach(checkbox => {
     checkbox.addEventListener('click',(event) =>{
     console.log(event);
     });
});

});



// test
