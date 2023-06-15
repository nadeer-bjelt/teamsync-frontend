import { config } from './config';
import axios from 'axios';

const API = axios.create({
  baseURL: config.baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
  }
});

API.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log(err);
    if (err.response.status === 401) {
      // store.dispatch({type:})
      localStorage.removeItem('accessToken');
    }
    return Promise.reject(err);
  }
);

export default API;
