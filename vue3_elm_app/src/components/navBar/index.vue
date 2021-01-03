<template>
  <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
</template>
<script>
export default {
  props: { title: String },
  setup() {
    const onClickLeft = () => {
      history.back();
    };
    return {
      onClickLeft,
    };
  },
};
</script>
