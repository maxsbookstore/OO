//PART 1
class Vehicle{
    constructor(model, make, year){
        this.model;
        this.make;
        this.year;
    }

    honk(){
        return "Beep";
    }

    toString(){
        return `The vehicle is a ${model} ${make} from ${year}`;
    }
}

//PART 2
class Car extends Vehicle{
    constructor(model, make, year){
        super(model, make, year);
        this.numOfWheels = 4;
    }
}

//PART 3
class Motorcycle extends Vehicle{
    constructor(model, make, year){
        super(model, make, year);
        this.numOfWheels = 2;
    }

    revEngine(){
        return "VROOM!!!";
    }
}

//PART 4
class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }