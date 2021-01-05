import base from '../base';
import axios from '../../utils/request';
const user = {
  // 登录
  goLogin(username, password) {
    return axios.post(`${base.api}/user/login`, {
      username,
      password,
    });
  },
};
export default user;
