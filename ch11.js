console.log('selamat datang di permainan tebak kata, silahkan isi dengan jawaban benar yah!')
const fs = require('fs')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'jawaban:'
});
const baca = fs.readFileSync('data.json' ,  'utf-8')
var isi =  JSON.parse(baca)
var data = 0
console.log(isi[data].definition)

rl.prompt();

rl.on('line', (jawaban) => {
  if (jawaban.toLowerCase() == isi[data].term) {
      console.log('jawaban anda benar!')
      data++
      if (data < isi.length) {
        console.log(isi[data].definition)
        rl.prompt()
      }
      if (data == isi.length) {
        console.log('selamat semua benar!')
        rl.close()
      }
  } else if (jawaban.toLowerCase() != isi[data].term){
    console.log('jawaban anda kurang tepat!')
    console.log(isi[data].definition)
    rl.prompt()
  }
  })
