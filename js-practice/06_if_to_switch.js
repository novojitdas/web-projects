/* 
06. Convert this code to switch case statement.

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/
// prompt always string,so need to converts to number by +
let a = +prompt('Please enter a number:'); 

switch (a) {
      case 0:
            alert(0);
            break;
      case 1:
            alert(1);
            break;
      case 2:
      case 3:
            alert('2 or 3');
            break
      default:
            alert("Not in Range");     
}