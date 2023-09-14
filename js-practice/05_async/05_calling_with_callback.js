/*
takingOrder 
processOrder
completeOrder
*/

const takingOrder = (customer,callback) => {
      console.log(`taking order for ${customer}`);
      callback(customer);
};

const processOrder = (customer,callback) => {
      console.log(`processing started for ${customer}`);
      setTimeout( () => {
            console.log(`cooking completed for ${customer}`);
            callback(customer);
      },3000)
};

const completeOrder = (customer) => {
      console.log(`order completed for ${customer}`);
};

takingOrder("Rez", (customer) =>{
      processOrder(customer,(customer) =>{
            completeOrder(customer);
      });
});