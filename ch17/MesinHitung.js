class MesinHitung {
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

let Pi = 22 / 7 // jari jari 7
var mh = new MesinHitung();
mh.tambah(10).kurang(5).hasil(); // 1 + 10 - 5 = 6
mh.tambah(3).perkalian(4).pembagian(6).hasil(); // current result is 2 then the mhutate is : 6 + 3 * 4 / 6 = 6
mh.x = 7; // set jari jari 7
console.log(`nilai sekarang : ${mh.x}`);
mh.perkalian(2).perkalian(Pi).hasil(); // keliling lingkaran dengan jari jari 7 => 2 x Pi x r = 44
mh.x = 7; // set jari jari 7
mh.akar_pangkat2().perkalian(Pi).hasil(); // luas lingkaran dengan jari jari 7 => Pi x r pangkat 2 = 154
mh.x = 4;
mh.exponent(3).hasil(); // 4 pangkat 3 = 64
mh.keliling_luaslingkaran().hasil(); // akar pangkat 2 dari 64 = 8