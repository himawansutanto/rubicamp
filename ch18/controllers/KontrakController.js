import Main, { rl } from '../main.js'
import Table from 'cli-table'
import IndexView from '../views/IndexView.js'
import DosenController from './DosenController.js';
import MahasiswaController from './MahasiswaController.js';
import Kontrak from '../models/Kontrak.js';
import MatakuliahController from './MatakuliahController.js';
import KontrakView from '../views/KontrakView.js';

export default class KontrakController {

    static menuKontrak() {
        KontrakView.menu()
        IndexView.line();
        rl.question('Masukkan salah satu no. dari opsi di atas : ', (opsi) => {
            switch (opsi) {
                case '1':
                    KontrakController.daftarKontrak()
                    break;
                case '2':
                    KontrakController.cariKontrak()
                    break;
                case '3':
                    KontrakController.tambahKontrak()
                    break;
                case '4':
                    KontrakController.hapusKontrak()
                    break;
                case '5':
                    Main.menuUtama()
                    break;
            }
        })
    }

    static daftarKontrak() {
        Kontrak.read(function (err, data) {
            if (err) {
                console.log('gagal ambil Kontrak', err)
                process.exit(1)
            }
            const tableKontrak = new Table({
                head: ['ID Kontrak', 'Nama', 'Nilai', 'NIP Dosen', 'Kode Matakuliah', 'NIM']
                , colWidths: [10, 20, 15, 20, 10, 20,]
            });
            data.forEach(item => {
                tableKontrak.push([
                    item.idkontrak,
                    item.nama,
                    item.nilai,
                    item.nipdosen,
                    item.kodematakuliah,
                    item.nim
                ])
            })
            console.log(tableKontrak.toString())
            KontrakController.menuKontrak()
        })
    }

    static cariKontrak() {
        rl.question('Masukkan ID Kontrak : ', (idkontrak) => {
            Kontrak.search(idkontrak, (err, data) => {
                if (err) {
                    console.log('gagal ambil Kontrak', err)
                    process.exit(1)
                }
                if (data.length == 0) {
                    console.log('data tidak ditemukan')
                    KontrakController.menuKontrak()
                } else {
                    KontrakView.detail(idkontrak, data[0])
                    KontrakController.menuKontrak()
                }
            })
        })
    }

    static tambahKontrak() {
        rl.question('Masukkan ID Kontrak : ', (idkontrak) => {
            rl.question('Masukkan Nama  : ', (nama) => {
                rl.question('Masukkan Nilai  : ', (nilai) => {
                    DosenController.daftarDosen(function () {
                        rl.question('Masukan Kode NIP Dosen : ', (nipdosen) => {
                            MatakuliahController.daftarMatakuliah(function () {
                                rl.question('Masukkan Kode Matakuliah : ', (kodematakuliah) => {
                                    MahasiswaController.daftarMahasiswa(function () {
                                        rl.question('Masukan NIM  :', (nim) => {
                                            Kontrak.add(idkontrak, nama, nilai, nipdosen, kodematakuliah, nim, (err) => {
                                                if (err) {
                                                    console.log('gagal tambah Kontrak', err)
                                                    KontrakController.tambahKontrak()
                                                } else {
                                                    console.log('Kontrak telah ditambahkan')
                                                    KontrakController.daftarKontrak()
                                                }
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    static hapusKontrak() {
        rl.question('Masukkan ID Kontrak : ', (idkontrak) => {
            Kontrak.remove(idkontrak, (err) => {
                if (err) {
                    console.log('gagal hapus Kontrak', err)
                    KontrakController.menuKontrak()
                } else {
                    console.log(`Kontrak dengan ID : ${idkontrak} telah dihapus`)
                    KontrakController.daftarKontrak()
                }
            })
        })
    }
}