/**
 * debounce 防抖 场景: 避免多次提交
 *   触发后, 如果有重复触发的, 都再次重新执行
 * throttle 节流 场景: 避免多次触发
 *   正在执行的, 不允许触发执行
 */

const throttle = (fn, delay) => {
  let flag = true
  return (...args) => {
    if (flag === false) return
    flag = false
    setTimeout(() => { 
      fn.call(this, ...args) 
      flag = true
    }, delay)
  }
}

const debounce = (fn, delay) => {
  let timer = null
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}