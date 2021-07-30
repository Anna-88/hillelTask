let sum = parseInt(prompt('Enter your number'));
let form = document.getElementById('form'); 
console.log(form);
function addInput (amount,element) {
 for(let index=amount; index >= 0; index--){
     let input = document.createElement('input');
     input.className = 'input-item';
     input.value = `input:${index}`;
     element.prepend(input);
     if(index % 2 !== 0){
         input.className = 'color';
         input.style.backgroundColor = 'aqua';
     }
     if(index === amount){
         input.className = 'margin-zero'
     }
 }
};

addInput(sum,form);

function changeValue (element) {
  let nodes =   element.childNodes;
  for(i=0; i<nodes.length; i+=3) {
    let input = nodes[i];
    input.value = '';
    input.placeholder = 'Heloo human';
  }
}

changeValue(form);