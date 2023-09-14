let tacosFound = true;

const tacosPromise = new Promise( (resolve,reject) => {
      if(tacosFound){
            resolve("setting up the table");
      } else {
            reject("cooking pasta");
      }
});

tacosPromise.then( (task) =>{
      console.log(task);
}).catch(  (task) => {
      console.log(task);
});