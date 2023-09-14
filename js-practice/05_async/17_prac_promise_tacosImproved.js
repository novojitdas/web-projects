let tacosFound = false;

const tacosPromise = new Promise( (resolved,rejected) => {
      if(tacosFound){
            resolved('bringing tacos');
      } else {
            rejected('tacos not found');
      }
});

const onResolved = (result) => {
      console.log(result);
      console.log('preparing table');
}

const onReject = (error) => {
      console.log(error);
      console.log('cooking noodles');
}

tacosPromise
      .then(onResolved)
      .catch(onReject);
