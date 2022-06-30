const readline = require('readline');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('university.db');
const { table } = require('console');
const Table = require('cli-table');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function login() {
    console.log(`==============================================================================
                        Welcome to Universitas Komputer Indonesia
                            Jl.Dipatiukur NO 112-116
==============================================================================`)

    rl.question('username = ', (username) => {
        console.log(`==============================================================================`)
        rl.question('password = ', (password) => {
            db.all('select * from Users where username  = ?  ', [username], (err, data) => {
                if (err) {
                    throw err;
                } else {
                    console.log(data)
                    console.log(data.length)
                    if (data.length == 0) {
                        console.log('Username atau password salah')
                        login();
                    } else {
                        if (username == data[0].username && password == data[0].password) {
                            console.log(``)
                            console.log(data[0].access);
                            console.log(`Welcome, ${username}. Your level is : ${data[0].access}`)
                            console.log(`==============================================================================`)
                            Mainmenu()
                        } else {
                            console.log('Username atau password salah')
                            login();
                        }
                    }
                }
            })
        })
    })
}

login();
const Mainmenu = () => {
    console.log(`
    Silahkan pilihan opsi di bawah ini 
    [1] Mahasiswa
    [2] Jurusan
    [3] Dosen
    [4] Mata Kuliah
    [5] Kontrak 
    [6] Keluar`)
    console.log(`==============================================================================`)
    rl.question("masukan salah satu no. dari opsi diatas:", (opsi) => {
        switch (opsi) {
            case '1':
                mahasiswaMenu();
                break;
            case '2':
                jurusanMenu();
                break;
            case '3':
                dosenMenu();
                break;
            case '4':
                matakuliahMenu();
                break;
            case '5':
                kontrakMenu();
                break;
            case '6':
                console.log(`==============================================================================`)
                console.log('kamu telah keluar.');
                login();
                break;
            default:
                console.log(`anda salah memasukan pilihan`);
                Mainmenu();
        }
    })
}

const mahasiswaMenu = () => {
    console.log(`
    Silahkan pilihan opsi di bawah ini 
    [1] Daftar Mahasiswa
    [2] Cari Mahasiswa
    [3] Tambah Mahasiswa
    [4] Hapus Mahasiswa
    [5] Kembali`)
    console.log(`==============================================================================`)
    rl.question("masukan salah satu no. dari opsi diatas:", (opsi) => {
        switch (opsi) {
            case '1':
                daftarMahasiswa();
                break;
            case '2':
                cariMahasiswa();
                break;
            case '3':
                tambahMahasiswa();
                break;
            case '4':
                hapusMahasiswa();
                break;
            case '5':
                kembaliMahasiwa();
                break;
            default:
                console.log(`anda salah memasukan pilihan`);
                Mainmenu();
        }
    })
}

function daftarMahasiswa() {
    db.all(`select Mahasiswa.nim, 
                   Mahasiswa.nama, 
                   Mahasiswa.alamat, 
                   Jurusan.kodejurusan, 
                   Jurusan.namajurusan 
                   from Mahasiswa,Jurusan 
                   Where Mahasiswa.kodejurusan = Jurusan.kodejurusan`, (err, data) => {
        let table = new Table({
            head: ['NIM', 'Nama Mahasiswa', 'Alamat Mahasiswa', 'Kode Jurusan']
            , colWidths: [10, 20, 20, 15]
        });
        data.forEach((row) => {
            table.push(
                [row.nim, row.nama, row.alamat, row.kodejurusan]
            );
        })
        console.log(table.toString());
        mahasiswaMenu()
    })
}

function kembaliMahasiwa() {
    Mainmenu();
}

const jurusanMenu = () => {
    console.log(`
    Silahkan pilihan opsi di bawah ini 
    [1] Daftar Jurusan
    [2] Cari Jurusan
    [3] Kembali`)
    console.log(`==============================================================================`)
    rl.question("masukan salah satu no. dari opsi diatas:", (opsi) => {
        switch (opsi) {
            case '1':
                daftarJurusan();
                break;
            case '2':
                cariJurusan();
                break;
            case '3':
                kembaliJurusan();
                break;
            default:
                console.log(`anda salah memasukan pilihan`);
                Mainmenu();
        }
    })
}

function daftarJurusan() {
    db.all(`select * from Jurusan`, (err, data) => {
        let table = new Table({
            head: ['Kode Jurusan', 'Nama Jurusan']
            , colWidths: [15, 20]
        });
        data.forEach((row) => {
            table.push(
                [row.kodejurusan, row.namajurusan]
            );
        })
        console.log(table.toString());
        Mainmenu()
    })
}

function kembaliJurusan() {
    Mainmenu();
}

const dosenMenu = () => {
    console.log(`
    Silahkan pilihan opsi di bawah ini 
    [1] Daftar Dosen
    [2] Cari Dosen
    [3] Tambah Dosen
    [4] Hapus Dosen
    [5] Kembali`)
    console.log(`==============================================================================`)
    rl.question("masukan salah satu no. dari opsi diatas:", (opsi) => {
        switch (opsi) {
            case '1':
                daftarDosen();
                break;
            case '2':
                cariDosen();
                break;
            case '3':
                tambahDosen();
                break;
            case '4':
                hapusDosen();
                break;
            case '5':
                kembaliDosen();
                break;
            default:
                console.log(`anda salah memasukan pilihan`);
                Mainmenu();
        }
    })
}

function daftarDosen() {
    db.all(`select * from Dosen`, (err, data) => {
        let table = new Table({
            head: ['NIP Dosen', 'Nama Dosen']
            , colWidths: [15, 50]
        });
        data.forEach((row) => {
            table.push(
                [row.nipdosen, row.nama]
            );
        })
        console.log(table.toString());
        dosenMenu()
    })
}

function kembaliDosen() {
    Mainmenu();
}

const matakuliahMenu = () => {
    console.log(`
    Silahkan pilihan opsi di bawah ini 
    [1] Daftar Matakuliah
    [2] Cari Matakuliah
    [3] Kembali`)
    console.log(`==============================================================================`)
    rl.question("masukan salah satu no. dari opsi diatas:", (opsi) => {
        switch (opsi) {
            case '1':
                daftarMatakuliah();
                break;
            case '2':
                cariMatakuliah();
                break;
            case '3':
                kembaliMatakuliah();
                break;
            default:
                console.log(`anda salah memasukan pilihan`);
                Mainmenu();
        }
    })
}

function daftarMatakuliah() {
    db.all(`select * from Matakuliah`, (err, data) => {
        let table = new Table({
            head: ['Kode Matakuliah', 'Nama Matakuliah', 'SKS']
            , colWidths: [20, 30, 5]
        });
        data.forEach((row) => {
            table.push(
                [row.kodematakuliah, row.nama, row.sks]
            );
        })
        console.log(table.toString());
        dosenMenu()
    })
}

function kembaliMatakuliah() {
    Mainmenu();
}

const kontrakMenu = () => {
    console.log(`
    Silahkan pilihan opsi di bawah ini 
    [1] Daftar Kontrak
    [2] Cari Kontrak
    [3] Kembali`)
    console.log(`==============================================================================`)
    rl.question("masukan salah satu no. dari opsi diatas:", (opsi) => {
        switch (opsi) {
            case '1':
                daftarKontrak();
                break;
            case '2':
                cariKontrak();
                break;
            case '3':
                kembaliKontrak();
                break;
            default:
                console.log(`anda salah memasukan pilihan`);
                Mainmenu();
        }
    })
}

function daftarKontrak() {
    db.all(`select * from Kontrak`, (err, data) => {
        let table = new Table({
            head: ['ID Kontrak', 'Nama Mahasiswa', 'Nilai', 'NIP Dosen', 'Kode Matakuliah', 'NIM']
            , colWidths: [15, 20, 10, 15, 20, 10]
        });
        data.forEach((row) => {
            table.push(
                [row.idkontrak, row.nama, row.nilai, row.nipdosen, row.kodematakuliah, row.nim]
            );
        })
        console.log(table.toString());
        kontrakMenu()
    })
}

function kembaliKontrak() {
    Mainmenu();
}