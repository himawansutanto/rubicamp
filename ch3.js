function romawi(n) {
    let desimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romawiHuruf = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let hasil = '';

    for (let index = 0; index < romawiHuruf.length; index++) {
        while (desimal[index] <= n) {
            hasil += romawiHuruf[index];
            n -= desimal[index];
        }
    }
    return hasil;
}

console.log("Script Testing untuk Konversi Romawi\n");
console.log("Input | expected | result");
console.log("------|----------|-------");
console.log("4     | IV       | ", romawi(4));
console.log("9     | IX       | ", romawi(9));
console.log("13    | XIII     | ", romawi(13));
console.log("1453  | MCDLIII  | ", romawi(1453));
console.log("1646  | MDCXLVI  | ", romawi(1646));