import axios from 'axios';
import * as config from '@/config';
import { Toast } from 'vant';

const request = axios.create({
    baseURL: config.baseUrl,
    timeout: 10000
});


request.interceptors.request.use(async (req) => {
  const token: string | null = localStorage.getItem('token');
  if (token !== undefined && token !== null ) {
    req.headers = { Authorization: token }
  }
  return req;
}, () => {})

request.interceptors.response.use(async (response) => {
  if (response.status !== 200){
    Toast.fail(response.statusText);
  }
  return response.data;
  }, () => {})


export default request;