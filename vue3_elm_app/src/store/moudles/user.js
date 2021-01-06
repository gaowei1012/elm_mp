import tool from '../../utils/tool';
import axios from '../../api';
import { Toast } from 'vant';
const user = {
  state: {
    nickname: tool.getItem('userInfo') ? JSON.parse(tool.getItem('userInfo')).username : '',
    token: tool.getItem('userInfo') ? JSON.parse(tool.getItem('userInfo')).token : '',
    userId: tool.getItem('userInfo') ? JSON.parse(tool.getItem('userInfo')).user_id : '',
    is_login: tool.getItem('isLogin') ? tool.getItem('isLogin') : 0,
  },
  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        axios
          .goLogin(userInfo.username, userInfo.password)
          .then(res => {
            Toast.success('登录成功');
            const info = {
              username: res.data[0].username,
              token: res.data[0].token,
              user_id: res.data[0].user_id,
              avatar: res.data[0].avatar_url,
            };
            commit('SET_INFO', info);
            commit('SET_NAME', res.data[0].username);
            commit('SET_USER_ID', res.data[0].user_id);
            commit('SET_TOKEN', res.data[0].token);
            commit('SET_LOGIN', 1);
            resolve(info);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    // 退出登录
    Loginout({ commit }) {
      // api.user.goLoginout().then(() => {
      //   commit('SET_INFO', {});
      //   commit('SET_NAME', '');
      //   commit('SET_LOGIN', 0);
      //   commit('SET_MY_INFO', '');
      //   commit('SET_GAME_INFO', '');
      //   tool.removeItem('userInfo');
      //   tool.removeItem('info');
      //   tool.removeItem('isLogin');
      //   tool.removeItem('email');
      //   tool.removeItem('idname');
      //   tool.removeItem('idcard');
      //   if (!router.history.current.name === 'officialWebsiteHome') {
      //     router.push('/');
      //   }
      // });
    },
  },
  mutations: {
    SET_INFO(state, info) {
      state.userInfo = info;
      tool.setItem('userInfo', JSON.stringify(info));
    },
    SET_NAME(state, name) {
      state.nickname = name;
    },
    SET_USER_ID(state, id) {
      state.user_id = id;
    },
    SET_TOKEN(state, token) {
      state.token = token;
      tool.setItem('token', 1);
    },
    SET_LOGIN(state, isLogin) {
      state.isLogin = isLogin;
      tool.setItem('isLogin', 1);
    },
  },
};
export default user;
