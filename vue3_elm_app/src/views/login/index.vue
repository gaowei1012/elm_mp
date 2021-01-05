<template>
  <div class="login-container">
    <h4 class="title">用户登录</h4>
    <van-form @submit="goLogin">
      <van-field v-model="username" label="用户名" placeholder="用户名" @blur="validata('username')" />
      <van-field v-model="password" type="password" label="密码" placeholder="密码" @blur="validata('pwd')" />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { toRefs, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { Toast } from 'vant';
import { is_empty } from '@/utils/regular';
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const form = reactive({
      username: '',
      password: '',
    });
    //  验证输入信息
    const validata = e => {
      if (e === 'username') {
        if (!is_empty(form.username)) {
          Toast.fail('请输入用户名');
        }
      } else {
        if (!is_empty(form.password)) {
          Toast.fail('请输入密码');
        }
      }
    };
    // 登录
    const goLogin = () => {
      const userinfo = {
        username: form.username,
        password: form.password,
      };
      if (userinfo.username || userinfo.password) {
        store.dispatch('LoginByUsername', userinfo).then(() => {
          router.push('/mine');
        });
      } else {
        Toast.fail('请确认信息输入完整');
      }
    };
    return { ...toRefs(form), validata, goLogin };
  },
};
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
