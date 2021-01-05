import { createStore } from 'vuex';
import getters from './getters';
import users from './moudles/user';
export default createStore({
  modules: { users },
  getters,
});
