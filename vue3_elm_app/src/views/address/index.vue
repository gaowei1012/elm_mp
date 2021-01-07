<template>
  <!-- <h4 class="title">收货地址</h4> -->
  <nav-bar :title="'收货地址'" />
  <div class="address-list">
    <div class="list" v-for="item in state" :key="item.id">
      <div class="address-info">
        <div class="flex">
          <div class="address">
            {{ item.address }}
          </div>
          <!-- TODO:后期换成tag标签 -->
          <div class="tag" v-if="item.tag">
            {{ item.tag }}
          </div>
        </div>
        <div class="detail">{{ item.houser_number }}</div>
        <div class="info">
          <div class="name">
            <span>{{ item.name }}</span>
            <span>({{ item.gender }})</span>
          </div>
          <div class="phone">{{ item.phone }}</div>
        </div>
      </div>

      <van-icon name="edit" @click="goEditAddress(item)" />
    </div>
  </div>
  <div class="add-address" @click="goAddAddress">
    <div>新增地址</div>
    <van-icon name="arrow" />
  </div>
</template>
<script>
import navBar from '@/components/navBar';
import { getCurrentInstance, reactive, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  components: { navBar },
  setup() {
    const router = useRouter();
    const { ctx } = getCurrentInstance();
    const store = useStore();
    const state = reactive([]);
    // 获取地址列表
    const getAddress = () => {
      ctx.axios.getAddress(store.getters.getUserId).then(res => {
        res.data.address.forEach(item => {
          state.push({
            id: item.id,
            name: item.name,
            tag: item.tag,
            phone: item.phone,
            address: item.address,
            gender: item.gender,
            houser_number: item.houser_number,
            addredd_id: item.address_id,
            user_id: item.user_id,
          });
        });
      });

      console.log('state==>', state);
    };
    // 监听数组
    watchEffect(() => {
      getAddress();
    });
    // 编辑地址
    const goEditAddress = e => {
      router.push({
        path: '/editAddress',
        query: e,
      });
      // router.push('/editAddress');
    };
    // 新增地址
    const goAddAddress = () => {
      router.push('/addAddress');
    };
    return { state, getAddress, goEditAddress, goAddAddress };
  },
};
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
