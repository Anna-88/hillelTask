import Cat from "./cat";
import Dog from "./dog";
import Hospital from "./hospital";
import Person from "./person";
import Veterinar from "./veterinarian";


function main () {
    let hospital = new Hospital('Happy Animals');
    let doctor = new Veterinar( 'Alina', 'Toliupa', hospital);
    let dog = new Dog('Bob', 'meat', 'Kiev', 22);
    let dog2 = new Dog('Bim', 'meet','Dnipro', 5);
    let cat = new Cat('Bars', 'pet food', 'Odessa');
    let cat2 = new Cat('Alisa', 'pet food', 'hospital', false); //бездомное
    let cat3 = new Cat('Sibastian', 'fish', 'hospital'); //бездомное
    let person = new Person('Ann', 'Sidorova');
    let person2 = new Person('Julia', 'Zenkina');
    let person3 = new Person('Emir', 'Opoku');
    //добавить в больницу животных и людей, которые ищут животных;
    let conclusion = doctor.treatAnimal(cat);
    hospital.addPeople(person);
    hospital.addPeople(person2);
    hospital.addPeople(person3);
    //hospital.addAnimal(dog);
    //hospital.addAnimal(cat);
    let arrAnimals = [cat, dog, dog2, cat2, cat3];
    console.group(doctor.getFullName());
    arrAnimals.forEach(animal => {
        console.log(doctor.treatAnimal(animal));
    });
    console.groupEnd();
}
main();



