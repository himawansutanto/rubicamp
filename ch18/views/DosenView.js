export default class DosenView {
    static menu() {
        console.log(`
silahkan pilih opsi di bawah ini :
[1] Daftar Dosen
[2] Cari Dosen
[3] Tambah Dosen
[4] Hapus Dosen
[5] Kembali
        `);
    }

    static detail(nipdosen, dosen) {
        console.log(`
Hasil Pencarian Dosen dengan NIP Dosen '${nipdosen}' :
Kode Dosen    : ${dosen.nipdosen}
Nama Dosen    : ${dosen.nama}
                `);
    }
}