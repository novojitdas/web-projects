const prom = new Promise((resolve,reject) =>{
      setTimeout(( () =>{
            resolve('promise has been resolved');
      }),3000);
});

prom.then( (msg) => {
      console.log(msg);
})
.catch( (msg) => {
      console.log("error");
});