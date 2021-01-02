<template>
  <h4 class="title">收货地址</h4>
  <div class="address-list">
    <div class="list" v-for="item in addressArray" :key="item.id">
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
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const addressArray = [
      {
        id: 0,
        name: '龚',
        houser_number: '孔家埭9号3-401',
        gender: '女士',
        phone: '13666683140',
        tag: '家',
        address: '浙江省杭州市拱墅区阳光郡(南门)',
      },
      {
        id: 1,
        name: '龚',
        gender: '女士',
        phone: '13666683140',
        tag: '公司',
        address: '浙江省杭州市西湖区西溪银泰城2号写字楼南903室',
      },
      {
        id: 2,
        name: '高',
        houser_number: '1单元1704-3',
        gender: '先生',
        phone: '13666683140',
        tag: '',
        address: '方家花苑20幢',
      },
    ];
    const goEditAddress = e => {
      console.log('编辑地址', e);
      router.push('/editAddress');
    };
    const goAddAddress = () => {
      console.log('新增地址');
      router.push('/addAddress');
    };
    return { addressArray, goEditAddress, goAddAddress };
  },
};
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
