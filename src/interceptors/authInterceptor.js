import axios from 'axios';

axios.interceptors.request.use(
  req => {
    req.withCredentials = true; 
    return req;
  },
  error => {
    return Promise.reject(error);
  }
);
