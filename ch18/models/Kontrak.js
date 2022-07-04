import { db } from '../main.js'

export default class Kontrak {
    static read(callback) {
        db.all('SELECT * FROM Kontrak', (err, data) => {
            callback(err, data)
        });
    }

    static add(idkontrak, nama, nilai, nipdosen, kodematakuliah, nim, callback) {
        db.run('INSERT INTO Kontrak VALUES (?, ?, ?, ?, ?, ?)', [idkontrak, nama, nilai, nipdosen, kodematakuliah, nim], (err) => {
            callback(err)
        });
    }

    static search(idkontrak, callback) {
        db.all('SELECT * FROM Kontrak WHERE idkontrak = ?', [idkontrak], (err, data) => {
            callback(err, data)
        });
    }

    static remove(idkontrak, callback) {
        db.run('DELETE FROM Kontrak WHERE idkontrak = ?', [idkontrak], (err) => {
            callback(err)
        });
    }
}