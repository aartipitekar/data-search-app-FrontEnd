import axios from 'axios';

// Create an instance of Axios with a base URL for the API
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Set the base URL for API requests
});

export default api;
