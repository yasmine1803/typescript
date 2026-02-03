var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
var myCar = new Car("Toyota", "Camry", 2022);
console.log("Car Details:");
console.log("Make: ".concat(myCar.make));
console.log("Model: ".concat(myCar.model));
console.log("Year: ".concat(myCar.year));
myCar.start();
