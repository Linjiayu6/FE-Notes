/**
 * fn.apply(context, [xxx])
 * fn.call(context, a, b, c, ...)
 * fn.bind(context)(a, b, c)
 */
Function.prototype._call_ = function (context) {
  var context = context || window
  const args = Array.prototype.slice.call(arguments, 1)
  // 放在对象或window去执行, this是 调用该方法的函数 eg: A.call(xxx), this 是 A
  context.fn = this
  context.fn(...args)
  delete context.fn
}

function fn (...args) { console.log(this.a, args) }
const obj = { a: 1, b: 2}

fn._call_(obj, '参数')


Function.prototype._apply_ = function (context) {
  var context = context || window
  const args = Array.prototype.slice.call(arguments, 1)
  context.fn = this
  context.fn(...args)
  delete context.fn
}
fn._apply_(obj, [1, 2, 3])

Function.prototype._bind_ = function (context) {
  var context = context || window
  var storeArgs = Array.prototype.slice.call(arguments, 1) // 传部分参数
  context.fn = this

  return function () {
    var args = Array.prototype.slice.call(arguments, 0) // 传剩下的参数
    storeArgs = storeArgs.concat(args)
    context.fn(...storeArgs)
    delete context.fn
  }
}
const _fn = fn._bind_(obj, 1, 2)
_fn(5, 6)