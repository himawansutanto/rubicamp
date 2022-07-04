import sqlite3 from 'sqlite3'
import readline from 'readline'
import IndexView from './views/IndexView.js'
import UserController from './controllers/UserController.js'
import JurusanController from './controllers/JurusanController.js'
import MahasiswaController from './controllers/MahasiswaController.js'
import DosenController from './controllers/DosenController.js'
import MatakuliahController from './controllers/MatakuliahController.js'
import KontrakController from './controllers/KontrakController.js'

export const db = new sqlite3.Database('university.db', sqlite3.OPEN_READWRITE, err => {
    if (err) {
        console.log('gagal koneksi dengan database', err)
    }
})

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

export default class Main {
    static menuUtama() {
        IndexView.line()
        IndexView.menuUtama()
        IndexView.line();
        rl.question('Masukkan salah satu no. dari opsi di atas : ', (opsi) => {
            switch (opsi) {
                case '1':
                    MahasiswaController.menuMahasiswa()
                    break;
                case '2':
                    JurusanController.menuJurusan()
                    break;
                case '3':
                    DosenController.menuDosen()
                    break;
                case '4':
                    MatakuliahController.menuMatakuliah()
                    break;
                case '5':
                    KontrakController.menuKontrak()
                    break;
                case '6':
                    Main.login()
            }
        })
    }

    static login() {
        IndexView.welcome()
        UserController.askUsername()
    }
}

Main.login()
