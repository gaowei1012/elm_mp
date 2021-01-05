import axios from 'axios';
import { Toast } from 'vant';
const service = axios.create({
  timeout: 10000, // request timeout
});

service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.statusCode === 200) {
      return Promise.resolve(res);
    } else {
      Toast.fail(res.message);
      return Promise.reject(res);
    }
  },

  error => {
    // eslint-disable-next-line new-cap
    // Message({
    //   message: '连接超时',
    //   type: 'error',
    //   duration: 5 * 1000,
    // });
    // router.push('/login');
    return Promise.reject(error);
  }
);

export default service;
