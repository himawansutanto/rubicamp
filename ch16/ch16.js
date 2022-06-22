class Tyre {
    constructor(brand, qty) {
        this.brand = brand;
        this.qty = qty;
    }
}

class Car {
    constructor(seat, door, tyre) {
        this.seat = seat;
        this.door = door;
        this.tyre = tyre;
    }
}

class Avanza extends Car {
    constructor(year) {
        super(7, 5, new Tyre("Bridgestone", 4), 3, year, "Avanza");
    }
}

class Agya extends Car {
    constructor(year) {
        super(5, 5, new Tyre("Dunlop", 4), 3, year, "Avanza");
    }
}