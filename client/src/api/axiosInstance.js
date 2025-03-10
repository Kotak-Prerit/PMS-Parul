import axios from 'axios';
import { toast } from 'react-toastify';
import { store } from '../redux/store.js';
import { logoutOnClient } from '../redux/auth/slice.js';

export const instance = axios.create({
  baseURL: 'https://admin-dashboard-back-n51a.onrender.com/api',
});

instance.interceptors.request.use(
  config => {
    const { auth } = store.getState();
    if (auth.user.token) {
      config.headers.Authorization = `Bearer ${auth.user.token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      toast.error('Unauthorized, logging out...');
      store.dispatch(logoutOnClient());
    }
    return Promise.reject(error);
  }
);
