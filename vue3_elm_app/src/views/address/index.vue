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
          <template v-if="item.tag">
            <van-tag v-if="item.tag === '家'" color="#E7F4FA" text-color="#677C87">{{ item.tag }}</van-tag>
            <van-tag v-else-if="item.tag === '公司'" color="#FEF4F5" text-color="#B37980">{{ item.tag }}</van-tag>
            <van-tag v-else color="#EDF9E6" text-color="#7B9063">{{ item.tag }}</van-tag>
          </template>
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
      <van-icon name="delete-o" @click="deleteAddress(item)" />
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
import { Toast, Dialog } from 'vant';
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
    // 删除地址
    const deleteAddress = e => {
      Dialog.confirm({
        message: '是否删除该条数据',
      }).then(() => {
        ctx.axios.deleteAddress(e.user_id, e.addredd_id).then(res => {
          if (res.data.success === 'false') {
            Toast.fail(res.data.message);
            return;
          }
          Toast.success(res.data.message);
          state.length = 0;
          getAddress();
        });
      });
    };
    return { state, getAddress, goEditAddress, goAddAddress, deleteAddress };
  },
};
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
