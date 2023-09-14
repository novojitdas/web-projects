const processOrder = () => {
      console.log(`processing order for customer 1`);
      // cake 
      setTimeout( () =>{
            console.log(`cake is ready after 3002ms`);
      },3002);
      // pizza
      setTimeout( () =>{
            console.log(`pizza is ready after 3001ms`);
      },3001);
      // pasta
      setTimeout( () => {
            console.log(`pasta is ready after 3000ms`); 
      },3000)
      // completed 
      console.log(`order is completed`);
};

console.log(`taking order for customer 1`);
processOrder();
console.log(`completed order for customer 1`);

/* OUTPUT:
taking order for customer 1
processing order for customer 1
order is completed
completed order for customer 1
pasta is ready after 3000ms
cake is ready after 3002ms
pizza is ready after 3001ms
*/