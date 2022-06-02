function weirdMultiply(sentence) {
    let angka = sentence.toString();
    let hasil = 1;

    if (angka.length > 1) {
        for (let index = 0; index < angka.length; index++) {
            hasil = hasil * angka[index];
        }
        return weirdMultiply(hasil);
    } else {    
        return angka;
    }
}

console.log(weirdMultiply(39)); // -> 3 * 9 = 27 -> 2 * 7 = 14 -> 1 * 4 = 4
console.log(weirdMultiply(999)); // -> 9 * 9 * 9 = 729 -> 7 * 2 * 9 = 126 -> 1 * 2 * 6 = 12 -> 1 * 2 = 2
console.log(weirdMultiply(3)); // -> 3 karena telah satu digit