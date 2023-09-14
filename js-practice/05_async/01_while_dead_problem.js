const processOrder = () => {
      console.log(`processing order for customer 1`);
      let currentTime = new Date().getTime();
      while(currentTime + 4000 >= new Date().getTime()); 
      // need to wait 4sec for execution of while loop
      // terminal will be blocked that time.
      console.log(`order processed for customer 1`);
};

console.log(`take order for customer 1`);
processOrder();
console.log(`completed order for customer 1`);

/* OUTPUT:
take order for customer 1
processing order for customer 1
(4 sec later)
order processed for customer 1
completed order for customer 1
*/