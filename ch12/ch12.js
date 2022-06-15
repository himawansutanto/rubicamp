if (!process.argv[2]) {
    console.log("Tolong sertakan nama file sebagai inputan soalnya Misalnya 'node solution.js data.json' ");
}
const readline = require('readline');
const fs = require('fs');
const kuis = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Jawaban : '
});

let hitung = 0;
let salah = 0;
console.log("Selamat datang di permainan Tebak-tebakan. kamu akan diberikan pertanyakan dari file ini 'Data.json'. Untuk bermain, jawablah dengan jawaban yang sesuai. Gunakan 'skip' untuk menanggukan pertanyaanya, dan di akhir pertanyaan akan di tanyakan lagi.");

console.log('Pertanyaan :' + kuis[hitung].definition);

rl.prompt();

rl.on('line', (jawaban) => {

    if (jawaban.trim().toLowerCase() == 'skip') {
        kuis.push(kuis[hitung])
        hitung++
        console.log('Pertanyaan :' + kuis[hitung].definition);
    } else {
        if (jawaban.trim().toLowerCase() == kuis[hitung].term.toLowerCase()) {
            console.log('Anda Beruntung!');
            hitung++
        } else {
            salah++
            console.log(`Anda Kurang Beruntung! anda telah salah ${salah} kali, silahkan coba lagi`);
        }
        if (hitung < kuis.length) {
            console.log('Pertanyaan :' + kuis[hitung].definition);
        } else {
            console.log('Anda Berhasil!');
            rl.close()
        }
        rl.prompt();
    }
}).on('close', () => {
    process.exit(0);
});