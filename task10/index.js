let coffeeMachine = {
    message: 'Your coffee is ready!',
    start: function() {
      setTimeout(() => console.log(`${this.message}`),3000)
    },
 }

 coffeeMachine.start();

 let teaPlease = {
    message: 'Wanna some tea instead of coffee?',
 }

  function start () {
    setTimeout(() => console.log(`${this.message}`),3000)
  }

 let showNewMassage  = start.bind(teaPlease);
 console.log(showNewMassage());


 //task2 

 function concatStr (str1, symbol, str2) {
  return str1.concat(symbol,str2);
};

let checkConcat = concatStr('Hello', ' ', 'Matt');
console.log(checkConcat);

let hello = function(name){
    console.log(`Hello ${name}`)
}.bind(this)

let finalResult = hello('Ann');
let finalResult2 = hello('John');

//можем более подробно разобрать привязку аргументов через bind

//Task3

function showNumbers(startNumber, endNumber, interval) {
    let timeId = setInterval(function() {
         startNumber++
         console.log(startNumber);
         if(startNumber === endNumber){
             clearInterval(timeId)
         }
    },interval)
  
}

showNumbers(5,10, 500);

function showNumbers2 (start, end, interval) {
  let count = start;

  setTimeout(function plus(){
      console.log(count);
      if(count < end){
          setTimeout(plus,interval);
      }
      count++

  },interval)
}

//Task4

function addBase(base) {
    return function (num) {
    return base + num;
   };
  }
  let addOne = addBase(1);
  alert(addOne(5) + addOne(3));

//в задаче 4 у нас пример замыкания. при присваивании addOne - родительская функция addBase
// вернула нам функцию и запомнила занчение переменной base.
// в следующей строчке кода когда мы вызвали addOne(5) => выпонлисля код 1 + 5 => 6 
// addOne(3) => вопонился код 1 + 3 => 4
// последним дейсвием мы сложили резульат двух вызаво  :6 + 4 => 10.



 