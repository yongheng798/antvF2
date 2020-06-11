/*
 * @Author: your name
 * @Date: 2020-06-02 09:24:45
 * @LastEditTime: 2020-06-11 14:11:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\view\jsx\jsModel.js
 */
// 观察者模式 VUE

// 防抖与节流
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
function throttle(func, wait, type) {
  if (type === 1) {
    let previous = 0;
  } else if (type === 2) {
    let timeout;
  }
  return function () {
    let context = this;
    let args = arguments;
    if (type === 1) {
      let now = Date.now();

      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args)
        }, wait)
      }
    }
  }
}