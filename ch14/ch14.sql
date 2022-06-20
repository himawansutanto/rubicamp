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