// instanceObj.instanceOf(Class) 实例对象是否属于某个类

function _instanceOf(instanceObj, Class) {
  // instanceObj = new Class()
  // instanceObj._proto_ = Class.prototype
  // Class.prototype.constructor = Class
  // 只需要判断, 实例对象_proto_ 指针是否指向 类的原型
  const target = Class.prototype
  const proto = instanceObj._proto_
  while (proto) {
    if (proto === target) {
      return true
    } else {
      proto = proto._proto_
    }
  }

  return false
}