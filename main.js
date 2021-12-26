class Transport {
    constructor(type, name, color, model) {
        this.type = type;
        this.name = name;
        this.color = color;
        this.model = model;
    }

    startEngine(){
        console.log("Engine is disable!")
    }
}

class Car extends Transport {
    constructor(type,name, color, model) {
        super(type, name, color, model);
    }
    startEngine() {
        console.log(`Engine on ${this.name} started!`)
    }
}

const bmw = new Car("Car", "BMW", "black", "e38");

console.log(bmw);
bmw.startEngine();


class Airplane extends Transport {
    constructor(type, name, color, model) {
        super(type, name, color, model);
    }
    startEngine() {
        console.log(`Engine on ${this.name} started!`)
    }
}

const airplane = new Airplane("Airplane", "Airbus","white", "a380");

console.log(airplane);
airplane.startEngine();


class Yacht extends Transport {
    constructor(type, name, color, model) {
        super(type, name, color, model);
    }
    startEngine() {
        console.log(`Engine on ${this.name} started!`)
    }
}

const yacht = new Yacht("Yacht","Eclipse", "silver", "164");

console.log(yacht);
yacht.startEngine();


class Motorbike extends Transport {
    constructor(type, name, color, model, engine) {
        super(type, name, color, model);

        this.engine = engine;
    }
    startEngine() {
        console.log(`Engine on ${this.name} started!`)
    }
}

const motorbike = new Motorbike("Motorbike", "Kawasaki", "dark blue", "h2r", "998");

console.log(motorbike);
motorbike.startEngine()