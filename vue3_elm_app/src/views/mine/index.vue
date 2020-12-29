<template>
  <div class="user-box">
    <img src="../../assets/img/avatar.jpeg" />
    <div class="name" v-if="!name">未登录</div>
    <div class="name" v-else>登录</div>
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
import { ref, reactive, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup(props, context) {
    const { ctx } = getCurrentInstance();
    const router = useRouter();
    const listArray = [
      { id: 0, name: '我的地址', icon: 'location-o' },
      { id: 1, name: '我的客服', icon: 'contact' },
      { id: 2, name: '规则中心', icon: 'contact' },
      { id: 3, name: '隐私政策', icon: 'contact' },
    ];

    const handleItem = e => {
      if (e.name !== '我的地址') {
        ctx.$toast.success('该功能正在开发中');
        return;
      }
      router.push('/address');
    };
    return { listArray, handleItem };
  },
};
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
