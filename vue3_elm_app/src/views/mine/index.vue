<template>
  <div class="user-box">
    <img src="../../assets/img/avatar.jpeg" />
    <div class="name" v-if="!nickname" @click="goLogin">未登录</div>
    <div class="name" v-else>{{ nickname }}</div>
  </div>
  <div class="list-box">
    <div class="list" v-for="item in listArray" :key="item.id" @click="handleItem(item)">
      <div class="box">
        <van-icon class="icon" :name="item.icon" />
        <span class="name">{{ item.name }}</span>
      </div>
      <van-icon name="arrow" />
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Dialog } from 'vant';
export default {
  setup() {
    const { ctx } = getCurrentInstance();
    const router = useRouter();
    const store = useStore();
    const listArray = [
      { id: 0, name: '我的地址', icon: 'location-o', path: '/address' },
      { id: 1, name: '修改密码', icon: 'location-o', path: '/changePassword' },
      { id: 2, name: '手机号换绑', icon: 'location-o' },
      { id: 3, name: '我的客服', icon: 'contact' },
      { id: 4, name: '规则中心', icon: 'contact' },
      { id: 5, name: '隐私政策', icon: 'contact' },
    ];

    const nickname = computed(() => store.getters.getNickName);

    // 登录
    const goLogin = () => {
      Dialog.confirm({
        message: '是否注册一个新用户',
      })
        .then(() => {
          router.push('/register');
        })
        .catch(() => {
          router.push('/login');
        });
    };
    const handleItem = e => {
      if (e.name === '手机号换绑' || e.name === '我的客服' || e.name === '规则中心' || e.name === '隐私政策') {
        ctx.$toast.success('该功能正在开发中');
        return;
      }
      router.push(e.path);
    };
    return { listArray, goLogin, nickname, handleItem };
  },
};
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
