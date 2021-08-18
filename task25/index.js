let promise = new Promise(function(resolve, reject){
    let number = Math.floor(Math.random() * 6) + 1
    setTimeout(function() {
        if(number >= 1 && number <= 5){
            console.log('Start the game...');
            resolve(number);
        }else if(number === 6){
           reject('Exit');
        }
    },2000)
});

promise.then(function(resolve){
  if(resolve === 1){
      console.log("Stay here")
  }else{
      console.log(`Go ${resolve} steps.`)
  }
})
.catch(error => {
    console.error(error);
});

