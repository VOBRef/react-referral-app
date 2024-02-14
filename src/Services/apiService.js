import axios from 'axios';

import { getAccessTokenFromLocal } from "./AuthService";

const baseURL = "https://script.google.com/macros/s/AKfycbx_UIB_IUa4NLISO-ev2nXdvFoen_2gbecGLidh4ip_ZfVDLJ1tgirR-fCY4O-ou5Q/exec";

// const handleErrors = (response) => {
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//   return response;
// };

const apiService = axios.create({
    baseURL,
  });

apiService.interceptors.request.use(async (config) => {
    try {
      const token = await getAccessTokenFromLocal();
  
      if (token !== "undefined") {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.log("Currently no stored token", error);
    }
    return config;
  });

apiService.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  apiService.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error('API Error:', error.message);
      return Promise.reject(error);
    }
  );

export default apiService;
