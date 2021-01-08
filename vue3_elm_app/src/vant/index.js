import {
  Tag,
  Button,
  Cell,
  CellGroup,
  NumberKeyboard,
  Icon,
  Image,
  Toast,
  Form,
  Field,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  NavBar,
  Area,
} from 'vant';

const vant = {
  install: function (Vue) {
    Vue.use(Tag);
    Vue.use(Button);
    Vue.use(Cell);
    Vue.use(CellGroup);
    Vue.use(Icon);
    Vue.use(NumberKeyboard);
    Vue.use(Image);
    Vue.use(Toast);
    Vue.use(Form);
    Vue.use(Field);
    Vue.use(Tabbar);
    Vue.use(TabbarItem);
    Vue.use(Tab);
    Vue.use(Tabs);
    Vue.use(NavBar);
    Vue.use(Area);
  },
};

export default vant;
