--TAMPILKAN MAHASISWA DAN JURUSAN
SELECT Mahasiswa.nim, Mahasiswa.nama, Mahasiswa.alamat, Jurusan.namajurusan FROM Mahasiswa JOIN Jurusan ON Mahasiswa.kodejurusan = Jurusan.kodejurusan;
--  TAMPILKAN DIBAWAH UMUR 20
SELECT Mahasiswa.nama, Mahasiswa.umur FROM Mahasiswa WHERE umur <20;
-- TAMPILKA DIATAS NILAI B
SELECT Mahasiswa.nama, Mahasiswa.nim, Kontrak.nilai FROM Mahasiswa, Kontrak WHERE Mahasiswa.nim = Kontrak.nim AND Kontrak.nilai <"B";
-- TAMPILKAN DIATAS NILAI SKS 10
SELECT Mahasiswa.nama, Mahasiswa.nim, sum(Matakuliah.sks) FROM Mahasiswa, Kontrak, Matakuliah WHERE Mahasiswa.nim = Kontrak.nim AND Kontrak.kodematakuliah = Matakuliah.kodematakuliah GROUP BY Mahasiswa.nim HAVING sum(Matakuliah.sks) >10;
-- TAMPILKAN DATA MINING
SELECT Mahasiswa.nama, Mahasiswa.nim, Matakuliah.kodematakuliah, Matakuliah.nama FROM Mahasiswa, Matakuliah, Kontrak WHERE Kontrak.nim = Mahasiswa.nim AND Kontrak.kodematakuliah = Matakuliah.kodematakuliah AND Matakuliah.nama = "Data Mining";
-- TAMPILKAN JUMLAH MAHASISWA DAN DOSEN
SELECT Dosen.nipdosen, Dosen.nama, count(DISTINCT Mahasiswa.nim) FROM Mahasiswa, Dosen, Kontrak WHERE Dosen.nipdosen = Kontrak.nipdosen AND Mahasiswa.nim = Kontrak.nim AND Kontrak.nama = Mahasiswa.nama GROUP BY Dosen.nama;
-- URUTKAN UMUR
SELECT Mahasiswa.nama, Mahasiswa.nim, Mahasiswa.umur FROM Mahasiswa ORDER BY umur ASC;
SELECT Mahasiswa.nama, Mahasiswa.nim, Mahasiswa.umur FROM Mahasiswa ORDER BY umur DESC;
-- TAMPILKAN NILAI D AND E JOIN WHERE
SELECT Mahasiswa.nim, Mahasiswa.nama, Jurusan.namajurusan, Dosen.nama, Matakuliah.nama, Kontrak.nilai FROM Mahasiswa JOIN  Jurusan JOIN dosen JOIN  Matakuliah JOIN  Kontrak WHERE Mahasiswa.nim = Kontrak.nim AND Matakuliah.kodematakuliah = Kontrak.kodematakuliah AND dosen.nipdosen = Kontrak.nipdosen AND Mahasiswa.kodejurusan = Jurusan.namajurusan AND Kontrak.nilai >"C";
 