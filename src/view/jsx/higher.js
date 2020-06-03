// 高阶函数集合

// 防抖（debounce)
// 防抖的实现方式分两种 “立即执行” 和 “非立即执行”，区别在于第一次触发时，是否立即执行回调函数。

// 
// e.g. 防抖 - 非立即执行
function debounce(func, delay) {
    var timeout;
    return function() {
      var context = this;
      var args = arguments;
      // && 短路运算 == if(timeout) else {...} 
      timeout && clearTimeout(timeout); 
      timeout = setTimeout(function(){
        func.apply(context, args);
      }, delay);
    }
  }
  
  // 调用
  var printUserName = debounce(function(){ 
    console.log(this.value);
  }, 800);
  document.getElementById('username').addEventListener('keyup', printUserName);

//   立即执行
// e.g. 防抖 - 立即执行
function debounce(func, delay) {
    var timeout;
    return function() {
        var context = this;
        var args = arguments;
        callNow = !timeout;
        timeout = setTimeout(function() {
            timeout = null;
        }, delay);
        callNow && func.apply(context, args);
    }
}

// 节流 时间戳
// e.g. 节流 - 时间戳
function throttle(func, delay) {
    var lastTime = 0;
    return function() {
      var context = this;
      var args = arguments;
      var nowTime = +new Date();
      if (nowTime > lastTime + delay) {
        func.apply(context, args)
        lastTime = nowTime;
      }
    }
  }
//  缺点：假定函数间隔1s执行，如果最后一次停止触发，卡在4.2s，则不会再执行。

// 定时器
// e.g. 节流 - 定时器
function throttle(func, delay) {
    var timeout;
    return function() {
      var context = this;
      var args = arguments;
      if (!timeout) {
        setTimeout(function(){
          func.apply(context, args);
          timeout = null;
        }, delay)
      }
    }
  }
  
// 时间戳和定时器互补
// e.g. 节流 - 时间戳 + 定时器
function throttle(func, delay) {
    let lastTime, timeout;
    return function() {
      let context = this;
      let args = arguments;
      let nowTime = +new Date();
      if (lastTime && nowTime < lastTime + delay) {
        timeout && clearTimeout(timeout);
        timeout = setTimeout(function(){
          lastTime = nowTime;
          func.apply(context, args);
        }, delay);
      } else {
        lastTime = nowTime;
        func.apply(context, args);
      }
    }
  }  

