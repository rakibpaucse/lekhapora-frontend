// import axios from 'axios';
// const Axios = axios.create({
//   baseURL: 'https://as.mutualempressa.com/lekapora/public/api',
//   timeout: 1000,
//   headers: {
//     'X-Custom-Header': 'foobar',
//     'Content-Type': 'text/plain',
//   },
// });
// // Axios.defaults.headers.post['Content-Type'] =
// //   'application/x-www-form-urlencoded';

// export default Axios;

import axios from 'axios';
// const baseDomain = 'https://as.mutualempressa.com/lekapora/public/api/'; // API for products
// const baseDomain = 'http://localhost:8081/'; // API for products
const baseDomain = 'http://links.shaheenagrofood.com/'; // API for products 

export const customHeaders = {
  Accept: 'application/json',
};

export const baseUrl = `${baseDomain}`;

const Axios = axios.create({
  baseURL: baseUrl,
  headers: customHeaders,
});

Axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default Axios;
