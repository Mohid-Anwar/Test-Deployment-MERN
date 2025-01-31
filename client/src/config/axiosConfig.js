import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

// Create axios instance with the full server URL
const instance = axios.create({
  baseURL,
  withCredentials: true // Add this if you're using credentials
});

// Add request interceptor to log and ensure absolute URLs
instance.interceptors.request.use((config) => {
  // Ensure URL starts with baseURL
  if (!config.url.startsWith('http')) {
    config.url = `${baseURL}${config.url}`;
  }
  console.log('Making request to:', config.url);
  return config;
});

export default instance;
