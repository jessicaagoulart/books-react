// import axios from 'axios'
const axios = require('axios');

export const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
});

const token = localStorage.getItem('@ioasys:token');

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;
