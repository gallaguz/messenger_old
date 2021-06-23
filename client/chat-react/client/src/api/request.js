import axios from 'axios';
import {withLogger} from './logger';

class Request {
  constructor(token) {
    this.token = token;
    this.request = withLogger(axios.create({
      baseURL: process.env.baseURL || 'http://localhost:3001',
      timeout: 1000,
    }));
  }

  requestWithToken = (token) => {
    return {
      headers: {'x-token': token},
    };
  };

  get = (url, withAuth) => {
    let config = {};

    if (withAuth) {
      config = {...config, ...this.requestWithToken(this.token)};
    }

    return this.request.get(url, config);
  };
  post = (url, params) => {
    return this.request.post(url, params, {});
  };
  delete = (url, params) => {
    return this.request.post(url, params, {});
  };
  put = () => {};
  patch = () => {};
}


export const request = new Request('token');
