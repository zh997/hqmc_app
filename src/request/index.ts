import axios from 'axios';
import * as config from '@/config';

const request = axios.create({
    baseURL: config.baseUrl,
    timeout: 10000
});


request.interceptors.request.use(async (req) => {
  return req;
}, () => {})

request.interceptors.response.use(async (response) => {
    return response;
  }, () => {})


export default request;