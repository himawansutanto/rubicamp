function sum() {
    let number = 0;
    for (let index = 0; index < arguments.length; index++) {
        number = number + arguments[index];
    }
    console.log(number);
}
sum(1, 2, 7);
sum(1, 4);
sum(11);
sum(10, 3, 6, 7, 9);