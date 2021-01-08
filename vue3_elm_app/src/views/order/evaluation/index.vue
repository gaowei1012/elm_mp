<template>
  <div class="order-container">
    <div class="content-box" v-for="item in array" :key="item.id">
      <div class="title">{{ item.shop_name }}</div>
      <div class="content">
        <div class="flex">
          <img :src="item.order_picture_url" :alt="item.shop_name" width="75" height="75" />
          <div class="time-box">
            <div class="time">{{ item.create_at }}</div>
            <div class="evaluation">评价</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from 'vue';
import tool from '@/utils/tool';
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

    array.forEach(value => {
      value.create_at = tool.formatDate(value.create_at);
    });

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
    padding: 15px 21px 20px;
    // position: relative;
    .title {
      line-height: 32px;
      border-bottom: 1px solid #eeeeee;
      margin-bottom: 22px;
    }
    img {
      border-radius: 5px;
    }
    .time-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      margin-left: 20px;
      .time {
        margin-bottom: 20px;
      }
      .evaluation {
        width: 75px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #cecece;
        text-align: center;
        border-radius: 15px;
        margin-left: 10px;
      }
    }
  }
}
</style>
