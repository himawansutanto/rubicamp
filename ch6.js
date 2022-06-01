function stringManipulation(word) {
    if (word.charAt(0) == 'a' || word.charAt(0) == 'i' || word.charAt(0) == 'u' || word.charAt(0) == 'e' || word.charAt(0) == 'o') {
        return word;
    } else {
        return word.substr(1) + word.charAt(0) + 'nyo';
    }
}

function senteceManipulation(sentece) {
    let words = sentece.split(' ');

    let hasil = [];

    for (let index = 0; index < words.length; index++) {
        hasil.push(stringManipulation(words[index]));
    }
    console.log(hasil.join(' '));
}
senteceManipulation('ibu pergi ke pasar bersama aku');