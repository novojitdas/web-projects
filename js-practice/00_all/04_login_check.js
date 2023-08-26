/*
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

*/
let username;
let password;

username = prompt("Please Enter your username below");
if (username === "Admin") {
      password = prompt("Please Enter The Password");
      if(password === "TheMaster"){
            alert("Welcome");
      } 
      else if (password === "" || password === null ) {
            alert("Cancelled");
      }
      else{
            alert("Sorry you have entered a wrong password");
      }
} else if (username === "" || username === null) {
      alert("cancelled");
}
else {
      alert("Do I know you?");
}

// Please RUN this on browser console. 

