//task1

let student = {
    firstName: 'Ann',
    lastName: 'Sidorova',
    averageScore: 4.8,
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    isGrantHolder: function () {
     return this.averageScore >= 4
    }
}

console.log(student.isGrantHolder());

function Aspirant (dissertationTopic, isDissertationComplete) {
    this.__proto__ = student;
    this.dissertationTopic = dissertationTopic;
    this.isDissertationComplete = isDissertationComplete;
    this.isGrantHolder = function () {
        return this.averageScore >= 4.5 && this.isDissertationComplete === true
    }

}

let aspirant1 = new Aspirant('Cake', false);
console.log(aspirant1.isGrantHolder());


//variant 2

function Aspirant2 (dissertationTopic, isDissertationComplete) {
    Object.setPrototypeOf(this, student);
    this.dissertationTopic = dissertationTopic;
    this.isDissertationComplete = isDissertationComplete;
    this.isGrantHolder = function () {
        return this.averageScore >= 4.5 && this.isDissertationComplete === true
    }

}

let aspirant2 = new Aspirant2('chemistry in nature', true);

console.log(aspirant2.isGrantHolder());

for(let value in aspirant1) {
    console.log(value);
}

//task2

class Plane {
    constructor (name) {
        this.name = name;
        this.isFlying = false;
    }
    takeOff () {
        this.isFlying = true;
        return this.isFlying;
    }
    land () {
        this.isFlying = false;
        return this.isFlying
    }
}

let airport = {
    planes: [],
    getFlyingPlanes() {
      return  this.planes.filter((obj) => obj.isFlying === true)
    }
}

let plane1 = new Plane("First");
let plane2 = new Plane("Killer");
plane2.takeOff();
airport.planes.push(plane1, plane2);
console.log(airport.getFlyingPlanes());