import axios from "axios";

export const axiosInstance = axios.create({
  // local url
  // baseURL: "http://127.0.0.1:5001/clone-f5c60/us-central1/api",
  
  baseURL: "https://abaymart-api-deploy.onrender.com",
});

