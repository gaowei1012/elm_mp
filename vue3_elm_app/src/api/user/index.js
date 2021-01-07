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
  // 注册
  goRegister(username, password) {
    return axios.post(`${base.api}/user/register`, {
      username,
      password,
    });
  },
  // 获取地址
  getAddress(userId) {
    return axios.get(`${base.api}/user/address/get_address/${userId}`);
  },
  // 新增地址
  addAddress(info) {
    console.log('info==>', info);
    return axios.post(`${base.api}/user/address/add`, {
      name: info.username,
      address: info.address,
      houser_number: info.houseNumber,
      phone: info.phone,
      tag: info.tag,
      gender: info.sex,
      user_id: info.user_id,
    });
  },
  // 修改地址
  editAddress(info) {
    return axios.put(`${base.api}/user/address/add`, {
      name: info.username,
      address: info.address,
      houser_number: info.houseNumber,
      phone: info.phone,
      tag: info.tag,
      gender: info.sex,
      user_id: info.user_id,
    });
  },
  // 删除地址
  deleteAddress(userid) {
    return axios.delete(`${base.api}/user/address/delete_address`, {
      userid,
    });
  },
};
export default user;
