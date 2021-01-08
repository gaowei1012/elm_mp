<template>
  <van-tabs v-model="active">
    <template v-for="item in tabArray" :key="item.id">
      <van-tab :title="item.name" :name="item.name" :to="item.path" @click.native="handleTab">
        <router-view />
      </van-tab>
    </template>
  </van-tabs>
</template>
<script>
import { ref, reactive } from 'vue';
export default {
  setup() {
    const active = ref('退款');
    const tabArray = [
      { id: 0, name: '全部', path: '/order/all' },
      { id: 1, name: '待评价', path: '/order/evaluation' },
      { id: 2, name: '退款', path: '/order/refund' },
    ];
    const handleTab = e => {
      console.log('e==>', e);
    };
    return { active, tabArray, handleTab };
  },
};
</script>
