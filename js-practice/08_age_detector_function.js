/* 
Allow Only 18+ People to watch the movie! 
*/

function ageDetect(age) {
      if (age >= 18) {
            return true;
      }
      else {
            return false;
      }
}

let age = prompt("Please Enter Your Age: ");

if (ageDetect(age)) {
      alert("Welcome to the movie.");
} else {
      alert("Sorry This Movie is Adult Only!");
}

// Optimizing Code 

function ageDetect(age) {
      if ( age >= 18) {
            alert("Welcome to the movie!");
      }
      else {
            alert("Sorry This Movie is Adult Only!");
      }
}

age = prompt("Please enter your age: ");
ageDetect(age);

// Please Run This code on browser console