import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000', // Pastikan ini sesuai dengan URL Laravel Anda
    timeout: 10000, // Optional: waktu tunggu
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
