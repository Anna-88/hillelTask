let button =  document.querySelector('#button');
console.log(button);
console.dir(button);

button.onclick = function(event){
    console.log(event.target);
    console.log('hello button');
}


// у акждого event есть свой тип.

//у каждого event есть объект. события.

// форма имеет свои особенности. для того чтобы данные сохранились они должны бить в одной 
// форме. 