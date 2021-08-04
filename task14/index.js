//task1
let list = document.querySelectorAll('li');
let arrFilms = [];
list.forEach((value) =>
   arrFilms.push(value.textContent)
);

let elem = document.getElementById('search');
elem.addEventListener('input', function(event){
    let element = document.getElementById('filmsCount');
    element.innerText = arrFilms.filter((value) => value.toString()
        .startsWith(event.target.value)
    ).length;
});

//task2
const INGREDIENTS = {
    "cocoa": ["cocoa powder", "milk", "sugar"],
    "cappuccino": ["milk", "coffee"],
    "smoothie": ["banana", "orange", "sugar"],
    "matcha frappe": ["matcha", "milk", "ice"]
  };

let ul = document.getElementById('menu');

 ul.addEventListener('click',  function (event) {
    let ol =  document.createElement('ol');
     event.target.prepend(ol);
    let ingredients = INGREDIENTS[event.target.textContent];
     for(let ingredient of ingredients) {
      let li = document.createElement('li');
       li.innerHTML = ingredient;
       ol.appendChild(li);
      }
    event.target.appendChild(ol);
});


//task *

//let ul = document.getElementById('menu');

//let evntFn =   function (event) {
    //let ol =  document.createElement('ol');
    // event.target.prepend(ol);
    //let ingredients = INGREDIENTS[event.target.textContent];
     //for(let ingredient of ingredients) {
     // let li = document.createElement('li');
     //  li.innerHTML = ingredient;
      // ol.appendChild(li);
    //  }
  //  event.target.appendChild(ol);
//};

//ul.addEventListener('click', evntFn);
//ul.removeEventListener('click', evntFn);









