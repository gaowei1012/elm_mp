<template>
  <div>
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="item in tabArray"
        :key="item.id"
        :name="item.name"
        :icon="item.icon"
        @click="handleTab(item)"
        >{{ item.name }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
import { ref, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
    let active = ref('我的');
    const tabArray = [
      { id: 0, name: '首页', icon: 'home-o', path: '/home' },
      { id: 1, name: '订单', icon: 'orders-o', path: '/order' },
      { id: 2, name: '我的', icon: 'setting-o', path: '/mine' },
    ];
    const router = useRouter();
    const { ctx } = getCurrentInstance();
    const name = ctx.$router.currentRoute.value.name;
    if (name === 'home') {
      active = '首页';
    } else if (name === 'order') {
      active = '订单';
    } else {
      active = '我的';
    }
    const handleTab = e => {
      active = e.name;
      router.push(e.path);
    };
    return { active, tabArray, handleTab };
  },
};
</script>
<style lang="less" scoped></style>
