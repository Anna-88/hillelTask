let promise = new Promise(function(resolve, reject){
    let number = Math.floor(Math.random() * 6) + 1
    setTimeout(function() {
        if(number >= 1 && number <= 5){
            resolve('Start the game...')
            return number;
        }else if(number === 6){
           reject('Exit');
           return number;
        }
    },2000)
});

promise.then(function(resolve){
  console.log(resolve)
})
.catch(error => {
    console.error(error);
});

