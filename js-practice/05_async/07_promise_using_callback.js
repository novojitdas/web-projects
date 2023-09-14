const raining = false;
const sunny = true;

function needUmbrella(callback,errorCallback){
      if(raining){
            errorCallback({
                  message:'raining outside',
                  action: '-> take umbrella'
            })
      }
      else if(sunny){
            errorCallback({
                  message:'Outside is very sunny',
                  action: '-> take umbrella'
            })
      }
      else{
            callback({
                  message: 'beautiful weather enjoy',
            })
      }
}

needUmbrella((callback) =>{
      console.log(callback.message);
}, (errorCallback) => { 
      console.log(`${errorCallback.message} ${errorCallback.action}`);
});