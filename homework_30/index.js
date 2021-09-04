//TASK_1

function getTime(){
    let timeStart = 0;
  return function(){
        if(timeStart){
            const newdDte = new Date().getTime();
            const diff  = (newdDte - timeStart) / 1000;
            timeStart = newdDte;
            return `${diff} seconds have passed`
        }else{
            console.log('Enabled');
            timeStart = new Date().getTime();
        }
  }
   
};

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




