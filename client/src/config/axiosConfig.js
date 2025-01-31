import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

// Create axios instance with the full server URL
const instance = axios.create({
  baseURL, // Don't append /api here
});

// Add a request interceptor to log the full URL (for debugging)
instance.interceptors.request.use((config) => {
  console.log('Making request to:', config.baseURL + config.url);
  return config;
});

export default instance;
