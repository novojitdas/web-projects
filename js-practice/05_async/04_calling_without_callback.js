/*
1. takeOrder 
2. processOrder 
3. completeOrder
*/

const takeOrder = (customer) => {
      console.log(`taking order of ${customer}`);
      processOrder(customer);
};

const processOrder = (customer) => {
      console.log(`order processing started ${customer}`);
      setTimeout( () =>{
            console.log(`cooking complete`);
            console.log(`order processed for ${customer}`);
            completedOrder(customer);
      },3000);
};

const completedOrder = (customer) => {
      console.log(`order completed for ${customer}`);
};

takeOrder("customer 1");

/* OUTPUT:
taking order of customer 1
order processing started customer 1
(after 3secs)
cooking complete
order processed for customer 1
order completed for customer 1
*/