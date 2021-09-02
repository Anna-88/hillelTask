//TASK_1

function getTime(){
    let counter = 0;
    let timeStart =  Number(new Date().toLocaleTimeString().substring(6));
   return function () {
    if (counter === 1){
        console.log('Enabled')
    }else if(counter >= 2) {
         console.log(`${timeStart} seconds have passed`);
    }
       return counter++ 
   }
}

let call1 = getTime();
console.log(call1());
console.log(call1());
console.log(call1());

//TASK_2
let element = document.querySelector('#counter')
const timer = time => {
    let countdown = setInterval(function(){
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds: seconds;
        console.log(`${minutes} : ${seconds}`);
        element.innerHTML = `${minutes} : ${seconds}`;
        time--
        if(time < 0){
            console.log('Time End');
            element.innerHTML = 'Time End';
            clearInterval(countdown);
        }
    },1000)
   }

timer(10);




