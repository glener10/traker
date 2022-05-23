import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Acess-Control-Allow-Origin": "*" },
  secure: false,
  changeOrigin: true,
});


export default api;