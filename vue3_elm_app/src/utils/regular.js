// export const phone = /^1[3456789]\d{9}$/;
// export const is_chinese = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{1,20}$/;

// 判断是否为空
export function is_empty(val) {
  if (!val) {
    return false;
  } else {
    return true;
  }
}
// 判断手机号格式是否正确
export function is_phone(val) {
  if (/^1[3456789]\d{9}$/.test(val)) {
    return true;
  } else {
    return false;
  }
}
// 判断是否为纯中文
export function is_chinese(val) {
  if (/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{1,20}$/.test(val)) {
    return true;
  } else {
    return false;
  }
}
