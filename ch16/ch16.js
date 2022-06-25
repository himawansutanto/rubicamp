class Tyre {
    constructor(merk, qty) {
        this.merk = merk;
        this.qty = qty;
    }
}

class Car {
    constructor(seat, door, tyre, guarantee, year, type) {
        this.seat = seat;
        this.door = door;
        this.tyre = tyre;
        this.guarantee = guarantee;
        this.year = year;
        this.type = type;
    }

    jalan() {
        console.log("jalan");
    }

    expireGuarantee(currentYear) {
        if (currentYear - this.guarantee <= this.year) {
            console.log("garansi masih berlaku");
        } else {
            console.log("garansi habis");
        }
    }
}

class Avanza extends Car {
    constructor(year) {
        super(7, 5, new Tyre("bridgestone", 4), 3, year, 'Avanza');
    }
}

class Agya extends Car {
    constructor(year) {
        super(5, 5, new Tyre("dunlop", 4), 1, year, 'Agya');
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    avanzaProduced(year) {
        let totalAvanza = CarFactory.getRandomInt();
        for (let index = 0; index < totalAvanza; index++) {
            this.cars.push(new Avanza(year));
        }
    }

    agyaProduced(year) {
        let totalAgya = CarFactory.getRandomInt();
        for (let index = 0; index < totalAgya; index++) {
            this.cars.push(new Agya(year));
        }
    }

    productionResult() {
        console.log(`avanza telah diproduksi sebanyak ${this.cars.length}, yakni :`);
        for (let index = 0; index < this.cars.length; index++) {
            console.log('avanza ', this.cars[index]);
        }
        console.log(`avanza telah diproduksi sebanyak ${this.cars.length}, yakni :`);
        for (let index = 0; index < this.cars.length; index++) {
            console.log('agya ', this.cars[index]);
        }
    }

    guaranteeSimulation(year) {
        console.log(`hasil simulasi untuk avanza, yakni :`);
        for (let index = 0; index < this.cars.length; index++) {
            console.log(this.cars[index]);
            this.cars[index].expireGuarantee(year);
        }
        console.log(`hasil simulasi untuk agya, yakni :`);
        for (let index = 0; index < this.cars.length; index++) {
            console.log(this.cars[index]);
            this.cars[index].expireGuarantee(year);
        }
    }

    static getRandomInt() {
        let min = 1;
        let max = 5;
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

let toyota = new CarFactory();
toyota.avanzaProduced(2012);
toyota.agyaProduced(2013);
toyota.agyaProduced(2015);
toyota.productionResult();
toyota.guaranteeSimulation(2015);