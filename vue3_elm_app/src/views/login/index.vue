<template>
  <div class="login-container">
    <h4 class="title">用户登录</h4>
    <van-form @submit="goLogin">
      <van-field
        v-model="form.phone"
        name="asyncValidator"
        label="手机号"
        placeholder="手机号"
        :rules="[{ validator: asyncValidator, message: '请填写手机号' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { reactive } from 'vue';
import { Toast } from 'vant';
export default {
  setup() {
    const form = reactive({
      phone: '',
      password: '123',
    });
    // 验证手机号
    // 异步校验函数返回 Promise
    // TODO:无法自定义验证
    const asyncValidator = val => {
      console.log('val==>', val);

      return new Promise(resolve => {
        Toast.loading('验证中...');
        console.log('val==>', val);
        setTimeout(() => {
          Toast.clear();
          resolve(/^1[3456789]\d{9}$/.test(val));
        }, 1000);
      });
    };
    const goLogin = values => {
      console.log('reg==>', values);
    };
    return { form, asyncValidator, goLogin };
  },
};
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
