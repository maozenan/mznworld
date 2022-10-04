import axios from 'axios';
import baseUrl from '../config/bashconfig';

const server = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? baseUrl.baseURL.dev : baseUrl.baseURL.pro,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  timeout: 10000,
});

server.interceptors.request.use((config) => config, (error) => Promise.reject(error));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line consistent-return
server.interceptors.response.use((res) => {
  if (res.status === 200) {
    return Promise.resolve(res.data);
  }
}, (error) => Promise.reject(error));
