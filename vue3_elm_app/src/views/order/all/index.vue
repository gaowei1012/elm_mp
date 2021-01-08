<template>
  <div class="order-container">
    <div class="content-box" v-for="item in array" :key="item.id">
      <div class="title flex justify-content-between">
        <div class="flex">
          <img :src="item.order_picture_url" :alt="item.shop_name" width="60" height="60" />
          <div class="name">{{ item.shop_name }}</div>
        </div>
        <div>{{ item.order_type }}</div>
      </div>

      <div class="content flex justify-content-center align-items-center">
        <img :src="item.order_picture_url" :alt="item.order_title" width="40" height="40" />
        <div class="order-title">{{ item.order_title }}</div>
        <div>{{ item.order_price }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const array = reactive([
      {
        id: 0,
        order_id: '591ef7d6-dfe7-42b7-bf67-b6049e95f09c',
        shop_name: '木桶盖饭(申花店)',
        order_picture_url:
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3023806798,280362912&fm=26&gp=0.jpg',
        delivery_status: '配送完成',
        order_type: '已完成',
        order_price: '18',
        order_title: '西红柿牛肉木桶饭',
        create_at: '2021-01-07T15:27:13+08:00',
      },
      {
        id: 1,
        order_id: '591ef7d6-dfe7-42b7-bf67-b6049e95f09d',
        shop_name: '木桶盖饭(申花店)',
        order_picture_url:
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3023806798,280362912&fm=26&gp=0.jpg',
        delivery_status: '配送完成',
        order_type: '已完成',
        order_price: '18',
        order_title: '西红柿牛肉木桶饭',
        create_at: '2021-01-07T15:27:13+08:00',
      },
      {
        id: 2,
        order_id: '591ef7d6-dfe7-42b7-bf67-b6049e95f09d',
        shop_name: '木桶盖饭(申花店)',
        order_picture_url:
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3023806798,280362912&fm=26&gp=0.jpg',
        delivery_status: '配送完成',
        order_type: '已完成',
        order_price: '18',
        order_title: '西红柿牛肉木桶饭',
        create_at: '2021-01-07T15:27:13+08:00',
      },
      {
        id: 3,
        order_id: '591ef7d6-dfe7-42b7-bf67-b6049e95f09d',
        shop_name: '木桶盖饭(申花店)',
        order_picture_url:
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3023806798,280362912&fm=26&gp=0.jpg',
        delivery_status: '配送完成',
        order_type: '已完成',
        order_price: '18',
        order_title: '西红柿牛肉木桶饭',
        create_at: '2021-01-07T15:27:13+08:00',
      },
    ]);
    return { array };
  },
};
</script>
<style lang="less" scoped>
.order-container {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f7f7f7;
  .content-box {
    width: 300px;
    margin: 0 auto 10px;
    background-color: #fff;
    padding: 15px 0 21px 0;
    img {
      border-radius: 5px;
    }
    .title {
      margin: 0 15px;
      .name {
        margin-left: 13px;
      }
    }
    .content {
      margin: 13px auto 0;
      .order-title {
        margin: 0 40px 0 13px;
      }
    }
  }
}
</style>
