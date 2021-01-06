import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/index.css';
import './assets/css/vant.css';
import vant from './vant';
import 'vant/lib/index.css';
import api from './api';
// import message from './utils/message';

const app = createApp(App);
app.config.globalProperties.axios = api; // 全局挂载，组件内通过const {ctx} = getCurrentInstance()获取

app.use(store).use(router).use(vant).mount('#app');
