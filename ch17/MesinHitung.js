export default class MesinHitung {
    constructor() {
        this.x = 1;
    }
    tambah(x) {
        this.x += x;
        return this;
    }
    kurang(x) {
        this.x -= x;
        return this;
    }
    pembagian(x) {
        this.x /= x;
        return this;
    }
    perkalian(x) {
        this.x *= x;
        return this;
    }
    akar_pangkat2(x) {
        this.x = Math.pow(this.x, 2);
        return this;
    }
    exponent(x) {
        this.x = Math.pow(this.x, 3);
        return this;
    }
    keliling_luaslingkaran(x) {
        this.x = Math.sqrt(this.x, 2);
        return this;
    }
    hasil() {
        console.log(this.x);
    }
}

export let Pi = 22 / 7 // jari jari 7