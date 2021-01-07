<template>
  <navBar :title="'编辑地址'" />
  <van-form @submit="onSubmit">
    <van-field v-model="form.username" label="联系人" placeholder="姓名" @blur="patternForm('username')" />
    <div class="gender">
      <div
        @click="handleGender(gender)"
        :class="genderActive === gender ? 'active' : null"
        v-for="(gender, genderIndex) in genderArray"
        :key="genderIndex"
      >
        {{ gender }}
      </div>
    </div>
    <van-field v-model="form.phone" label="手机号" placeholder="请输入手机号" @blur="patternForm('phone')" />
    <van-field v-model="form.address" label="地址" placeholder="地址" @blur="patternForm('address')" />
    <van-field
      v-model="form.houseNumber"
      label="门牌号"
      placeholder="例：5号楼203室"
      @blur="patternForm('houseNumber')"
    />
    <div class="tag-box">
      <div class="title">标签</div>
      <div
        class="tag"
        :class="tagActive === tag ? 'active' : null"
        @click="handleTag(tag)"
        v-for="(tag, tagIndex) in tagArray"
        :key="tagIndex"
      >
        {{ tag }}
      </div>
    </div>

    <div style="margin: 16px">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>
<script>
import { ref, reactive, getCurrentInstance, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Toast } from 'vant';
import tools from '@/utils/tool';
import navBar from '@/components/navBar';
import { is_chinese, is_phone, is_empty } from '../../../utils/regular';
export default {
  components: { navBar },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { ctx } = getCurrentInstance();
    const store = useStore();
    let genderActive = ref('');
    let tagActive = ref('');
    const genderArray = reactive(['先生', '女士']);
    const tagArray = reactive(['家', '公司', '学校']);
    const form = reactive({
      username: '',
      sex: '',
      phone: '',
      address: '',
      houseNumber: '',
      tag: '',
    });
    //  验证手机号
    const patternForm = val => {
      if (val === 'username') {
        if (!is_empty(form.username)) {
          Toast.fail('请输入用户名');
        } else if (!is_chinese(form.username)) {
          Toast.fail('用户名只能是中文');
        }
      } else if (val === 'phone') {
        if (!is_empty(form.phone)) {
          Toast.fail('请输入13位数的手机号');
        } else if (!is_phone(form.phone)) {
          Toast.fail('请输入格式正确的手机号');
        }
      } else if (!is_empty(form.address)) {
        Toast.fail('请输入地址');
      } else {
        if (!is_empty(form.houseNumber)) {
          Toast.fail('请输入门牌号');
        }
      }
    };
    // 点击性别
    const handleGender = e => {
      form.sex = e;
      genderActive.value = e;
    };
    // 点击标签
    const handleTag = e => {
      tagActive.value = e;
      form.tag = e;
    };
    // 获取编辑数据
    const getEditData = () => {
      form.username = route.query.name;
      form.sex = route.query.gender;
      form.tag = route.query.tag;
      form.phone = route.query.phone;
      form.address = route.query.address;
      form.houseNumber = route.query.houser_number;
      genderActive.value = route.query.gender;
      tagActive.value = route.query.tag;
    };
    // 监听传参
    watchEffect(() => {
      getEditData();
    });
    // 提交订单
    const onSubmit = () => {
      if (form.username || form.phone || form.address || form.houseNumber || form.tag || form.sex) {
        if (!store.getters.getUserId) {
          Toast.fail('请先登陆');
          router.push('/login');
          return;
        }
        form.address_id = route.query.addredd_id;
        form.user_id = route.query.user_id;
        ctx.axios.editAddress(form).then(res => {
          Toast.success(res.message);
          router.go(-1);
        });
      } else {
        Toast.fail('请将信息填写完整');
      }
    };
    return {
      patternForm,
      getEditData,
      genderActive,
      genderArray,
      tagActive,
      tagArray,
      form,
      handleGender,
      handleTag,
      onSubmit,
    };
  },
};
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
