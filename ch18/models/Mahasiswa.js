import { db } from '../main.js'

export default class Mahasiswa {
    static read(callback) {
        db.all('SELECT * FROM Mahasiswa LEFT JOIN Jurusan ON Mahasiswa.kodejurusan = Jurusan.kodejurusan', (err, data) => {
            callback(err, data)
        });
    }

    static add(nim, nama, alamat, kode, umur, callback) {
        db.run('INSERT INTO Mahasiswa VALUES (?, ?, ?, ?, ?)', [nim, nama, alamat, kode, umur], (err) => {
            callback(err)
        });
    }

    static search(nim, callback) {
        db.all('SELECT * FROM Mahasiswa LEFT JOIN jurusan ON Mahasiswa.kodejurusan = Jurusan.kodejurusan WHERE NIM = ?', [nim], (err, data) => {
            callback(err, data)
        });
    }

    static remove(nim, callback) {
        db.run('DELETE FROM Mahasiswa WHERE NIM = ?', [nim], (err) => {
            callback(err)
        });
    }
}