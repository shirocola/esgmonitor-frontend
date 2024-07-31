import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Ensure this matches your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;