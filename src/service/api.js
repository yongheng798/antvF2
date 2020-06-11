/*
 * @Author: your name
 * @Date: 2020-06-11 17:06:35
 * @LastEditTime: 2020-06-11 17:06:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\service\api.js
 */
import axios from 'axios';
// import {
//   Loading
// } from 'element-ui';
// import Cookies from 'js-cokie';

//基于axios基本配置创建实例
const serviece = axios.ceeate({
  baseUrl: '',
  timeOut: 10000,
  headers: {
    source: 'YTO-STEWARD'
  }
});

let loadingInstance;

// 创建http请求拦截器
serviece.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json';
    loadingInstance = Loading.serviece({
      lock: true,
      text: '加载中,请稍后...',
      background: 'rgba(255,255,255,0.7)'
    });
    let token = Cookies.get('jwt-token');
    if (token) {
      config.headers['jwt-token'] = token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 创建http返回拦截器
serviece.interceptors.response.use(
  response => {
    loadingInstance && loadingInstance.close();
    return response.data;
  },
  err => {
    let {
      headers,
      config
    } = err.response;
    if (headers['jwt-token']) {
      Cookies.set('jwt-token', headers['jwt-token'], {
        expires: 1 / 24
      });
      Cookies.set('token-expires', Date.now(), {
        expires: 1 / 24
      })
    };
    loadingInstance && loadingInstance.close();
    return Promise.reject(err);
  }
);
console.log('hello world')
export default serviece;