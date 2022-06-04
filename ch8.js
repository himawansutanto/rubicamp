function pola(str) {
    let number = str.split('=');
    let number1 = number[0].split('*')[0].trim();
    let number2 = number[0].split('*')[1].trim();
    let number3 = number[1].trim();

    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            if (parseInt(number1.replace('#', i)) * parseInt(number2) == parseInt(number3.replace('#', j)))
                return [i, j];
        }
    }
}
console.log(pola("42#3 * 188 = 80#204"));
// result [8, 5]
console.log(pola("8#61 * 895 = 78410#5"));
// result [7,9]