export default class MatakuliahView {
    static menu() {
        console.log(`
silahkan pilih opsi di bawah ini :
[1] Daftar Matakuliah
[2] Cari Matakuliah
[3] Tambah Matakuliah
[4] Hapus Matakuliah
[5] Kembali
        `);
    }

    static detail(kodematakuliah, matakuliah) {
        console.log(`
Hasil Pencarian Matakuliah dengan Kode Matakuliah '${kodematakuliah}' :
Kode Matakuliah    : ${matakuliah.kodematakuliah}
Nama Matakuliah    : ${matakuliah.nama}
SKS                : ${matakuliah.sks}                        `);
    }
}