# ToDo List API

API untuk aplikasi ToDo List menggunakan Node.js, Express, dan MongoDB.

## Fitur

- **User Registration**: Daftar pengguna baru.
- **User Login**: Masuk untuk mendapatkan token.
- **CRUD ToDo**:
  - Buat ToDo baru
  - Lihat semua ToDo
  - Lihat detail ToDo
  - Ubah ToDo
  - Hapus ToDo
  - Hapus semua ToDo

## Teknologi yang Digunakan

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)

## Endpoints

- **POST** `/api/auth/register` - Mendaftarkan pengguna baru.
- **POST** `/api/auth/login` - Masuk dan mendapatkan token.
- **GET** `/api/todos` - Mendapatkan semua ToDo.
- **GET** `/api/todos/:id` - Mendapatkan detail ToDo berdasarkan ID.
- **POST** `/api/todos` - Membuat ToDo baru.
- **PUT** `/api/todos/:id` - Mengubah ToDo berdasarkan ID.
- **DELETE** `/api/todos/:id` - Menghapus ToDo berdasarkan ID.
- **DELETE** `/api/todos` - Menghapus semua ToDo.

## Penggunaan

1. Clone repositori ini.
2. Jalankan `npm install` untuk menginstal dependensi.
3. Atur variabel lingkungan di file `.env`:
    MONGO_URI=<your_mongodb_connection_string> JWT_SECRET=<your_jwt_secret> PORT=3000
4. Jalankan aplikasi dengan `npm run dev`.

## Pengujian

Gunakan Postman atau alat serupa untuk menguji API.

