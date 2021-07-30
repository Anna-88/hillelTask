//task1
let vegetable = {
    name: 'onions',
    color: 'white'
}
const { name, color } = vegetable;

console.log(`${name}s are usually ${color}`);

//task2

const { shape= 'round' } = vegetable;
console.log(`${name}s are usually ${shape}`);

//task3
let vegetables = [{
    name: 'cucumbers',
    color: 'green'  
}, {
    name:'tomato',
    color: 'red'
}]
const [cucumber, tomato] = vegetables;
console.log(`${cucumber.name}s are usually ${cucumber.color}`);
console.log(`${tomato.name}s are usually ${tomato.color}`);

//task4

let students = [
    { name: 'Kate', age: 25 },
    { name: 'Artur', age: 30 },
    { name: 'Nick', age: 15 },
    { name: 'Alex', age: 28 },
    { name: 'Zhenia', age: 45 },
  ];

  const [, , second, ...otherStudents] = students;

  console.log(`${second.name} and ${otherStudents.length}`);
