function indexPrime(param1) {

    function IndexPrimer2(param2) {
        if (param2 < 2) {
            return false;
        } else {
            for (let index = 2; index < param2; index++) {
                if (param2 % index == 0) {
                    return false;
                }
            }
            return true;
        }
    }
    let prima = [];
    let angka = 2;
    while (prima.length < param1) {
        if (IndexPrimer2(angka)) {
            prima.push(angka)
        }
        angka++
    }
    return prima[prima.length - 1];
}
console.log(indexPrime(4)); //result => 7
console.log(indexPrime(500)); //result => 3571
console.log(indexPrime(37786)); //result => 450881