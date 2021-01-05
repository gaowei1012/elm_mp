<template>
  <navBar :title="'修改密码'" />
  <van-form @submit="onSubmit">
    <van-field v-model="form.password" label="旧密码" placeholder="旧密码" @blur="patternForm('old')" />
    <van-field
      v-model="form.newPassword"
      type="password"
      label="新密码"
      placeholder="新密码"
      @blur="patternForm('new')"
    />
    <van-field
      v-model="form.surePassword"
      type="password"
      label="确认密码"
      placeholder="确认密码"
      @blur="patternForm('sure')"
    />
    <div style="margin: 16px">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>
<script>
import { reactive, getCurrentInstance } from 'vue';
import { is_empty } from '@/utils/regular';
import navBar from '@/components/navBar';
export default {
  components: { navBar },
  setup() {
    const { ctx } = getCurrentInstance();
    const form = reactive({
      oldPassword: '',
      newPassword: '',
      surePassword: '',
    });
    // 表单验证
    const patternForm = e => {
      if (e === 'old') {
        if (!is_empty(form.oldPassword)) {
          ctx.$toast.fail('请输入旧密码');
        } else if (e === 'new') {
          if (!is_empty(form.newPassword)) {
            ctx.$toast.fail('请输入新密码');
          }
        } else {
          if (!is_empty(form.surePassword)) {
            ctx.$toast.fail('请输入确认密码');
          } else if (form.newPassword !== form.surePassword) {
            ctx.$toast.fail('两次密码不一致');
          }
        }
      }
    };
    return {
      form,
      patternForm,
    };
  },
};
</script>
<style lang="less" scoped>
.van-form {
  margin-top: 10px;
}
</style>
