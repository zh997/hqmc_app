import axios from 'axios';

const request = axios.create({
    baseURL: '',
    timeout: 10000
});


request.interceptors.request.use(async (req) => {
  return req;
}, () => {})

request.interceptors.response.use(async (response) => {
    return response;
  }, () => {})


export default request;