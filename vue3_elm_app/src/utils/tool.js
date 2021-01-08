let dayjs = require('dayjs');
class tools {
  static setItem(key, val) {
    return localStorage.setItem(key, val);
  }
  static getItem(key) {
    return localStorage.getItem(key);
  }
  static removeItem(key) {
    return localStorage.removeItem(key);
  }
  // 格式化时间
  static formatDate(val) {
    return dayjs(val).format('YYYY-MM-DD HH:mm:ss');
  }
}
export default tools;
