CREATE TABLE Jurusan (
    kodejurusan    VARCHAR(4) NOT NULL PRIMARY KEY,
    namajurusan    TEXT NOT NULL 
);

CREATE TABLE Mahasiswa (
    nim             VARCHAR(6) NOT NULL PRIMARY KEY,
    nama            VARCHAR(100) NOT NULL,
    alamat          TEXT,
    kodejurusan     VARCHAR(4) NOT NULL,
    FOREIGN KEY (kodejurusan) REFERENCES Jurusan (kodejurusan)
);

CREATE TABLE Dosen (
    nipdosen        VARCHAR(5) NOT NULL PRIMARY KEY,
    nama            VARCHAR(100) NOT NULL
);

CREATE TABLE Matakuliah (
    kodematakuliah  VARCHAR(5) NOT NULL PRIMARY KEY,
    nama            VARCHAR(100) NOT NULL,
    sks             INTEGER NOT NULL
);

CREATE TABLE Kontrak (
    idkontrak       INTEGER PRIMARY KEY AUTOINCREMENT,
    nama            VARCHAR(100) NOT NULL,
    nilai           VARCHAR(5),
    nipdosen        VARCHAR(5) NOT NULL,
    kodematakuliah  VARCHAR(5) NOT NULL,
    nim             VARCHAR(6) NOT NULL,
    FOREIGN KEY (nipdosen) REFERENCES Dosen (nipdosen),
    FOREIGN KEY (kodematakuliah) REFERENCES Matakuliah (kodematakuliah),
    FOREIGN KEY (nim) REFERENCES Mahasiswa (nim)        
);

INSERT INTO Jurusan VALUES ('I001', 'Ilmu Hadis');
INSERT INTO Jurusan VALUES ('K002', 'Kedokteran');
INSERT INTO Jurusan VALUES ('R003', 'Rekayasa Hayati');
INSERT INTO Jurusan VALUES ('T004', 'Teknik Penerbangan');
INSERT INTO Jurusan VALUES ('S005', 'Sistem Informasi');

INSERT INTO Mahasiswa VALUES (10109250, 'Wildan', 'Bandung', 'I001');
INSERT INTO Mahasiswa VALUES (10109251, 'Hilmi', 'Bandung', 'K002');
INSERT INTO Mahasiswa VALUES (10109252, 'Nanda', 'Makasar', 'R003');
INSERT INTO Mahasiswa VALUES (10109253, 'Rahmat', 'Makasar', 'T004');
INSERT INTO Mahasiswa VALUES (10109254, 'Alam', 'Bandung', 'S005');
INSERT INTO Mahasiswa VALUES (10109255, 'Rizky', 'Bandung', 'I001');
INSERT INTO Mahasiswa VALUES (10109256, 'Himawan', 'Cianjur', 'S005');

INSERT INTO Dosen VALUES (101090, 'Prof. Dr. Arifuddin, M.Ag.');
INSERT INTO Dosen VALUES (101091, 'Prof.Dr. Didik Gunawan Tamtomo, dr,PAK,MM,M.Kes.');
INSERT INTO Dosen VALUES (101092, 'Yooce Yustiana, Ir., M.Si., Dr.');
INSERT INTO Dosen VALUES (101093, 'Ahmad Bahrawi, S.E., M.T.');
INSERT INTO Dosen VALUES (101094, 'Tono Hartono, S.Si,,M.T.');

INSERT INTO Matakuliah VALUES ('B1011', 'Bahasa Arab', 2 );
INSERT INTO Matakuliah VALUES ('A1012', 'Anatomi', 3 );
INSERT INTO Matakuliah VALUES ('M1013', 'Matematika IA', 3 );
INSERT INTO Matakuliah VALUES ('A1014', 'Astrodinamika', 3 );
INSERT INTO Matakuliah VALUES ('P1015', 'Data Mining', 3 );
INSERT INTO Matakuliah VALUES ('P1016', 'Struktur Data', 3 );
INSERT INTO Matakuliah VALUES ('P1017', 'Algoritma dan Pemrograman', 3 );
INSERT INTO Matakuliah VALUES ('P1018', 'Jaringan Komputer', 3 );

INSERT INTO Kontrak (nama, nilai, nipdosen, kodematakuliah, nim) VALUES ('Wildan', 'A', 101090, 'B1011', 10109250);
INSERT INTO Kontrak (nama, nilai, nipdosen, kodematakuliah, nim) VALUES ('Hilmi', 'B', 101091, 'A1012', 10109251);
INSERT INTO Kontrak (nama, nilai, nipdosen, kodematakuliah, nim) VALUES ('Nanda', 'B', 101092, 'M1013', 10109252);
INSERT INTO Kontrak (nama, nilai, nipdosen, kodematakuliah, nim) VALUES ('Rahmat', 'D', 101093, 'A1014', 10109253);
INSERT INTO Kontrak (nama, nilai, nipdosen, kodematakuliah, nim) VALUES ('Alam', 'A', 101090, 'A1012', 10109254);
INSERT INTO Kontrak (nama, nilai, nipdosen, kodematakuliah, nim) VALUES ('Rizky', 'A', 101094, 'B1011', 10109255);
INSERT INTO Kontrak (nama, nilai, nipdosen, kodematakuliah, nim) VALUES ('Himawan', 'D', 101094, 'P1015', 10109256);
INSERT INTO Kontrak (nama, nilai, nipdosen, kodematakuliah, nim) VALUES ('Himawan', 'D', 101094, 'P1016', 10109256);
INSERT INTO Kontrak (nama, nilai, nipdosen, kodematakuliah, nim) VALUES ('Himawan', 'D', 101094, 'P1017', 10109256);
INSERT INTO Kontrak (nama, nilai, nipdosen, kodematakuliah, nim) VALUES ('Himawan', 'E', 101094, 'P1018', 10109256);


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
SELECT Mahasiswa.nim, Mahasiswa.nama, Jurusan.namajurusan, Dosen.nama, Matakuliah.nama, Kontrak.nilai FROM Mahasiswa JOIN  Jurusan JOIN dosen JOIN  Matakuliah JOIN  Kontrak WHERE Mahasiswa.nim = Kontrak.nim AND Matakuliah.kodematakuliah = Kontrak.kodematakuliah AND dosen.nipdosen = Kontrak.nipdosen AND Mahasiswa.kodejurusan = Jurusan.kodejurusan AND Kontrak.nilai >"C";
 
ALTER TABLE Mahasiswa ADD COLUMN umur VARCHAR(2);

UPDATE Mahasiswa SET umur = 22 WHERE nim =10109250;
UPDATE Mahasiswa SET umur = 22 WHERE nim =10109251;
UPDATE Mahasiswa SET umur = 23 WHERE nim =10109252;
UPDATE Mahasiswa SET umur = 21 WHERE nim =10109253;
UPDATE Mahasiswa SET umur = 18 WHERE nim =10109254;
UPDATE Mahasiswa SET umur = 19 WHERE nim =10109255;
UPDATE Mahasiswa SET umur = 25 WHERE nim =10109256;