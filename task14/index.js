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

  function addLine (value) {
      value += value + "<br>";
  }

  ul.addEventListener("click" , function (event) {
    let elem = document.createElement('ol');
        event.target.append(elem);
    if(event.target.innerText === "cocoa"){
        elem.append(INGREDIENTS.cocoa);
    }else if(event.target.innerText === "cappuccino"){
        elem.append(INGREDIENTS.cappuccino);
    }else if(event.target.innerText === "smoothie"){
        elem.append(INGREDIENTS.smoothie);
    }else if(event.target.innerText === "matcha frappe"){
        elem.append(INGREDIENTS["matcha frappe"]);
    }   
  }
     
  );






