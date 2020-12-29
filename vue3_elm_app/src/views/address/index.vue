<template>
  <h4 class="title">收货地址</h4>
  <div class="address-list">
    <div class="list" v-for="item in addressArray" :key="item.id">
      <div class="address-info">
        <div class="address">{{ item.address }}</div>
        <div class="info">
          <div class="name">
            <span>{{ item.name }}</span>
            <span>({{ item.sex }})</span>
          </div>
          <div class="phone">{{ item.phone }}</div>
        </div>
      </div>

      <van-icon name="edit" />
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue';
export default {
  setup() {
    const addressArray = [
      { id: 0, name: '龚', sex: '女士', phone: '13666683140', tag: '家', address: '浙江省杭州市拱墅区阳光郡4-301' },
      {
        id: 1,
        name: '龚',
        sex: '女士',
        phone: '13666683140',
        tag: '公司',
        address: '浙江省杭州市西湖区西溪银泰城2号写字楼南903室',
      },
      { id: 2, name: '高', sex: '先生', phone: '13666683140', tag: '', address: '方家花苑20幢1单元1704-3' },
    ];
    return { addressArray };
  },
};
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
