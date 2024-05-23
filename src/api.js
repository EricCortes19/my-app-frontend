// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002', // URL base de tu backend
});

export default api;
