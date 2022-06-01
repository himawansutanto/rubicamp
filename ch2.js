function deretKaskus(n) {
    let number = [];
    for (let index = 3; index <= n * 3; index += 3) {
        if (index % 5 == 0 && index % 6 == 0) {
            number.push('KASKUS');
        } else if (index % 5 == 0) {
            number.push('KAS');
        } else if (index % 6 == 0) {
            number.push('KUS');
        } else {
            number.push(index);
        }
    }
    return number;
}
console.log(deretKaskus(10));