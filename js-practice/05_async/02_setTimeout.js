const processOrder = () => {
      console.log(`order processing for customer 1`);
//Syntax: setTimeOut( Callback Function, Time);
      setTimeout( () => {
            console.log(`cooking complete`);
      },4000);
      console.log(`order processed for customer 1`);
};

console.log(`taking order for customer 1`);
processOrder();
console.log(`order completed for customer 1`);

/* OUTPUT:
taking order for customer 1
order processing for customer 1
order processed for customer 1
order completed for customer 1
(after 4 secs)
cooking complete
*/