// Object.create(原型对象) 封装个指针指向目标值
const objectCreate = prototype => {
  // 目标 obj._proto_ = prototype
  function F () {}
  F.prototype = prototype
  return new F()
}