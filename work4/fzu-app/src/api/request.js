import axios from 'axios';

const request = axios.create({
  baseURL: 'http://47.122.132.101:8080',
  timeout: 5000,
});

export default request;