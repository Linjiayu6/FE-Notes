function _new (Class, ...args) {
  const obj = {}
  obj._proto_ = Class.prototype
  Class.apply(obj, args)
  return obj
}
