<template>
  <div>{{ message }}</div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const message = ref('查看退款');
    return { message };
  },
};
</script>
<style lang="less" scoped></style>
