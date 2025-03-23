DROP DATABASE IF EXISTS pariwisata;
CREATE DATABASE pariwisata;
USE pariwisata;

-- Tabel pengguna
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE users ADD COLUMN avatar TEXT DEFAULT 'default-avatar.png';


-- Tabel tempat wisata 
CREATE TABLE wisata (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    lokasi VARCHAR(255) NOT NULL,
    deskripsi TEXT,
    kategori VARCHAR(100),
    harga VARCHAR(20), 
    rating DECIMAL(3,2) DEFAULT 0.0,
    image_url TEXT,
    gallery1 TEXT,
    gallery2 TEXT,
    gallery3 TEXT,
    maps_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel event wisata
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(255) NOT NULL,
    event_place VARCHAR(255),
    event_date VARCHAR(50),
    event_about TEXT,
    event_img TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE events MODIFY COLUMN event_date DATE;


-- Tabel rating wisata
CREATE TABLE rating (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    place_id INT NOT NULL,
    user_rating INT CHECK (user_rating BETWEEN 1 AND 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (place_id) REFERENCES wisata(id) ON DELETE CASCADE
);

UPDATE rating SET user_rating = 4 WHERE user_id = 5 AND place_id = 10;

