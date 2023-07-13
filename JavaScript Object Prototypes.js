
// JavaScript Object Prototypes

function Car(name, model, year) {
    this.carName = name,
    this.carModel = model,
    this.buildYear = year
}

// we can not add a new property to an existing object constructor
Car.color = "red";

const bmw = new Car("BMW", "X-7", 2017)
const audi = new Car("Audi", "A4", 2018)

console.log(bmw.color); // undefined

// actualy this set [[Prototype]] object and its gets all new objects.
Car.prototype.color = "Black"; 
console.log(bmw.color); // Black
console.log(audi.color + ` is audi color`); // Black

// we can also add a constructor method
Car.prototype.CarDetails = function() {
    return `My ${this.carName}  ${this.carModel} car build in ${this.buildYear}.`;
}
console.log(bmw.CarDetails());
console.dir(bmw); // Car.prototype.color = "Black"; and this CarDetails method  wasn't store Car constructor this was store [[Prototype]] object.