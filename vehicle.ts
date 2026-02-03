
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}


class Car implements Vehicle {
 
    make: string;
    model: string;
    year: number;


    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }


    start(): void {
        console.log("Car engine started");
    }
}

const myCar = new Car("Toyota", "Camry", 2022);


console.log("Car Details:");
console.log(`Make: ${myCar.make}`);
console.log(`Model: ${myCar.model}`);
console.log(`Year: ${myCar.year}`);


myCar.start();