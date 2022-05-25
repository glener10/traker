import axios from 'axios';
//import { getCookiePromisse } from "../utils/coockies";


const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    "Content-Type": "application/json",
  },
});

/*api.interceptors.request.use(
  async (config) => {
    var token = await getCookiePromisse("kcIdToken");
    if (token) {
      var decodedToken = Buffer.from(String(token), "base64").toString(
        "binary"
      );
      config.headers!["Authorization"] = "Bearer " + decodedToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);*/

export default api;