let paymentStatus = true;
let marks = 60;
let link = 'https://novojit.com';

const enroll = (paymentCallback,callback) => {
      console.log('Processing payment... Please Wait')
      setTimeout( () => {
      if(paymentStatus) {
            paymentCallback();
            callback();
      } else {
            console.log("sorry payment has been failed");
      }
},3000);

};

const passTest = (callback) => { 
      console.log("checking your assignment....");
      setTimeout( () => {
            if(marks>=60){
                  console.log('congrats, you have passed the test');
                  callback();
            } else {
                  console.log('sorry, you have failed. complete your assignment again');
            }
      },3000);
};

const getCertificate = () => {
      console.log('preparing your certificate');
      setTimeout(() => {
            console.log(`here your certificate, check ${link}`);
      },3000);
};

const payment = () => {
      console.log('payment successful');
};

// test 
// sending double callback as argument
enroll(payment,function(){
      passTest(getCertificate);
});