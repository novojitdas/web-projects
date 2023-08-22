// Write a JavaScript program to display the current day and time in the following format.  
let today = new Date();
let date = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();

// optimizing display format
if (date < 10){
      date = '0' + date;
}

if (month<10){
      month = '0'+month;
}

display = date + '/' + month + '/' + year;
console.log(display);