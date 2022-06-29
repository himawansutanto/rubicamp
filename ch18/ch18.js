const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('university.db');

const Table = require('cli-table');
var table = null;

function login() {
    console.log(`======================================================================================
                        Welcome to Universitas Komputer Indonesia
                                Jl.Dipatiukur NO 112-116
======================================================================================`)
    rl.question('username = ', (username) => {
        rl.question('password = ', (password) => {
            db.all('select * from Users where username  = ?  ', [username], (err, rows) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(rows[0].access);
                    console.log(`====================================================================================== Welcome, ${username}. Your level is : ${rows[0].access} `)
                    Mainmenu()
                }
            })
        })
    })
}

login();
const Mainmenu = () => {
    console.log(`
    ===============================================================================
    Silahkan pilihan opsi di bawah ini 
    [1] Mahasiswa
    [2] Jurusan
    [3] Dosen
    [4] Mata Kuliah
    [5] Kontrak 
    [6] Keluar`)
}