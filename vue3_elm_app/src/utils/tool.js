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
}
export default tools;
