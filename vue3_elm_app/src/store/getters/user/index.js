const users = {
  // 获取用户名
  getNickName: state => {
    return state.users.nickname;
  },
  // 获取用户ID
  getUserId: state => {
    return state.users.userId;
  },
  // 获取token
  getToken: state => {
    return state.users.token;
  },
  // 获取是否登录
  getIsLogin: state => {
    return state.users.is_login;
  },
};
export default users;
