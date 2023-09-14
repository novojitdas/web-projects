let raining = true; 
let sunny = false;

const needUmbrella = new Promise((resolve,reject) => {
      if(raining){
            reject({
                  message:'raining outside',
                  action:'-> take umbrella'
            });
      } else if(sunny) {
            reject({
                  message:'weather is very sunny',
                  action:'-> take umbrella'
            });
      } else {
            resolve({
                  message:'enjoy outside'
            });
      }
}
);

// call function
needUmbrella.then(
      (pass) => {
            console.log(pass.message);
      }
)
            .catch(
      (pass) => {
            console.log(`${pass.message} ${pass.action}`);
      }
);