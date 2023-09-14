const counter = (start,end,callback) => {
      for(i=start;i<end;i++){
            if(callback){
                  callback(i);
            }
      }
};

const print = (value) => {
      console.log(value);
}

counter(2,8,print);