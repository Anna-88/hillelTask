//TASK_1

function getTime(){
    let start =  0;
    let timeStart = Math.floor(Math.random() * 60) + 1;
   return function () {
    if (start === 1){
        console.log('Enabled')
    }else if(start >= 2) {
        let timeProcessing = Math.floor(Math.random() * 60) + 1;
        let timeDif = timeProcessing - timeStart;
         console.log(`${timeDif} seconds have passed`);
    }
       return start++;
   }
}

let testCalling = getTime();
console.log(testCalling());
console.log(testCalling());
console.log(testCalling());


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

//timer(10);




