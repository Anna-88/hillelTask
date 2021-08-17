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

promise.then(response => {
    console.log(response);
})
.catch(error => {
    console.error(error);
});


let p = new Promise(function(resolve, reject){
    let num = Math.floor(Math.random() * 6) + 1;
    setTimeout(function(){
     if(num === 1){
        resolve("Stay here")
        return num;
    }else if(num >= 2){
        resolve(`Go ${num} steps`)
    }else{
        reject('exit');
    }
    },2000);
    
});

p.then(resolve => console.log(resolve)).catch(reject => console.error(reject));