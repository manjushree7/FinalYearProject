import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // replace with your deployed URL if needed
});

//Automatically include token in future requests if needed
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
