function deretKaskus(n) {
    let number = [];
    for (let i = 3; i <= n * 3; i +=3) {
        if (i % 5 == 0 && i % 6 == 0) {
            number.push('KASKUS');
        } else if (i % 5 == 0) {
            number.push('KAS');
        } else if (i % 6 == 0) {
            number.push('KUS');
        } else {
            number.push(i);
        }
    }
    return number;
}
console.log(deretKaskus(10));
