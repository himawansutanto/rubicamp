import { db } from '../main.js'

export default class Matakuliah {
    static read(callback) {
        db.all('SELECT * FROM Matakuliah', (err, data) => {
            callback(err, data)
        });
    }

    static add(kodematakuliah, nama, sks, callback) {
        db.run('INSERT INTO Matakuliah VALUES (?, ?, ?)', [kodematakuliah, nama, sks], (err) => {
            callback(err)
        });
    }

    static search(kodematakuliah, callback) {
        db.all('SELECT * FROM Matakuliah WHERE kodematakuliah = ?', [kodematakuliah], (err, data) => {
            callback(err, data)
        });
    }

    static remove(kodematakuliah, callback) {
        db.run('DELETE FROM Matakuliah WHERE kodematakuliah = ?', [kodematakuliah], (err) => {
            callback(err)
        });
    }
}