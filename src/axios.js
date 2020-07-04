import axios from 'axios';
import store from './store';

const instance = axios.create({
    baseURL: 'https://trefle.io/api',
});

instance.interceptors.request.use((config) => {
    config.headers.common['Authorization'] = `Bearer ${store.getState().auth.token}`;

    return config;
});

export default instance;