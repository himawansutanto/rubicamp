import { db } from '../main.js'

export default class Dosen {
    static read(callback) {
        db.all('SELECT * FROM Dosen', (err, data) => {
            callback(err, data)
        });
    }

    static add(nipdosen, nama, callback) {
        db.run('INSERT INTO Dosen VALUES (?, ?)', [nipdosen, nama], (err) => {
            callback(err)
        });
    }

    static search(nipdosen, callback) {
        db.all('SELECT * FROM Dosen WHERE nipdosen = ?', [nipdosen], (err, data) => {
            callback(err, data)
        });
    }

    static remove(nipdosen, callback) {
        db.run('DELETE FROM Dosen WHERE nipdosen = ?', [nipdosen], (err) => {
            callback(err)
        });
    }
}