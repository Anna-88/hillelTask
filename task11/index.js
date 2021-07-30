//Task1/part1 
let parent = document.getElementById('main');

function changeBackground (element, color) {
   let child = element.children;
       child.item(child.length-1).style.backgroundColor = color;
}


changeBackground(parent, 'red');

//task1/part2

let grandParent = document.getElementById('wrapper');

function changePlaceStart (elemParnt, elemChild) {
  elemParnt.prepend(elemChild);
}

changePlaceStart(grandParent,parent);

//task2

let elemText = document.getElementById('wrapper2');

function addImages(element){
  if(confirm('Do you want to add a picture')){
     let picture = document.createElement('img'); 
     let adress = prompt('Enter addres your picture');
     picture.src = adress;
     element.append(picture);
     return picture;
    }else{
        console.log('Try agine');
    }
}

addImages(elemText);


