const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tulis kalimatmu disni> '
});

rl.prompt();

rl.on('line', (line) => {

    function stringManipulation(word) {
        if (word.charAt(0) == 'a' || word.charAt(0) == 'i' || word.charAt(0) == 'u' || word.charAt(0) == 'e' || word.charAt(0) == 'o') {
            return word;
        } else {
            return word.substr(1) + word.charAt(0) + 'nyo';
        }

    }

    let words = line.split(' ');
    let hasil = [];

    for (let index = 0; index < words.length; index++) {
        hasil.push(stringManipulation(words[index]));
    }

    console.log(hasil.join(' '));

    rl.prompt();
}).on('close', () => {
    console.log('Good bye!');
    process.exit(0);
});