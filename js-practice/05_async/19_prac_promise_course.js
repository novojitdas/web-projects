let paymentStatus = true; // change to false (for testing)
let marks = 60; // change to below 60 (for testing)

/*
enroll
passTest
getCertificate
payment
*/
function enroll() {
      console.log("checking payment status...");
const promise = new Promise((resolve,reject) => {
      setTimeout( () => {
            if(paymentStatus){
                  console.log('payment successful');
                  console.log("you are enrolled to the course");
                  resolve();
            } else {
                  reject('payment failed');
            }
      },3000);
});

      return promise;
}

function passTest() {
      console.log('checking your assignments....');

const promise = new Promise((resolve,reject) => {
      setTimeout( () => {
            if(marks>=60){
                  console.log('you have passed the test');
                  resolve();
            } else {
                  reject('you have failed to pass');
            }
      },3000);
});

     return promise; 
}

function getCertificate() {
      console.log('preparing your certificate....');
const promise = new Promise((resolve) => {
      setTimeout( () => {
            console.log('here is your certificate');
            resolve();
      },3000);
});
    
      return promise;
}

// promise call
enroll()
      .then(passTest)
      .then(getCertificate)
      .catch( (error) =>{
            console.log(error);
      });

