let p = new Promise((resolve,reject) => {
      let con = 1+2;
      if(con == 2){
            resolve("true");
      } else {
            reject("false");
      }
});

p.then(
      (message) => {
      console.log(`this is in the then -> ${message}`);
}
).catch(
      (message) => {
      console.log(`this is in the catch => ${message}`);
      }
);