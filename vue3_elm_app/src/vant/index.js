import { Button, Cell, CellGroup, NumberKeyboard, Icon, Image, Toast, Form, Field } from 'vant';

const vant = {
  install: function (Vue) {
    Vue.use(Button);
    Vue.use(Cell);
    Vue.use(CellGroup);
    Vue.use(Icon);
    Vue.use(NumberKeyboard);
    Vue.use(Image);
    Vue.use(Toast);
    Vue.use(Form);
    Vue.use(Field);
  },
};

export default vant;
