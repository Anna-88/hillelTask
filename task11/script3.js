let element = document.getElementById('matrix')

function creat (number, element){
    for(let index = number; index >= 1; index--){
        let elemChild = document.createElement('th');
        element.prepend(elemChild);
        elemChild.innerText = index;
        if(index === number){
            elemChild.style.backgroundColor = 'green';
        }
    }
}

creat(5,element);