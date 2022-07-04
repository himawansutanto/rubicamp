export default class KontrakView {

    static menu() {
        console.log(`
silahkan pilih opsi di bawah ini :
[1] Daftar Kontrak
[2] Cari Kontrak
[3] Tambah Kontrak
[4] Hapus Kontrak
[5] Kembali
        `);
    }

    static detail(idkontrak, kontrak) {
        console.log(`
Hasil Pencarian kontrak dengan ID '${idkontrak}' :
ID Kontrak      : ${kontrak.idkontrak}
Nama            : ${kontrak.nama}
Nilai           : ${kontrak.nilai}
NIP Dosen       : ${kontrak.nipdosen}
Kode Matakuliah : ${kontrak.kodematakuliah}
NIM             : ${kontrak.nim}                          `);
    }
}