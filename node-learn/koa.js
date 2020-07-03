
function Koa () {
  this.middleware = []
}

Koa.prototype = {
  constructor: Koa,
  use: function (fn) {
    // 执行队列 [a, b, c]
    this.middleware.push(fn)
    return this
  },

  get: function () {
    return this.middleware
  }
}

const app = new Koa()
const fn = data => { console.log(data)}
app.use(fn)
   .use(fn)
   .use(fn)

console.log(app.get())

// [A, B, C] 串行逻辑
// 1 => A() => 2 => B() => 3 => C() 每个函数都是上个函数传进来的值 + 1
const A = data => new Promise((resolve, reject) => {
  setTimeout(() => { 
    console.log('A 1000ms')
    resolve()
  }, 1000)
})

const B = data => new Promise((resolve, reject) => {
  setTimeout(() => { 
    console.log('B 2000ms')
    resolve()
  }, 2000)
})

const C = data => new Promise((resolve, reject) => {
  setTimeout(() => { 
    console.log('C 3000ms')
    resolve()
  }, 3000)
})

A(1).then(() => {
  // then 里面一定是Promsie
  return B()
}).then(() => {
  return C()
})


// C(B(A(1))) 先执行 A => B => C
function compose() {
  let fns = Array.prototype.slice.call(arguments)  // [ [f: A], [f: B], [f: C] ]
  fns = fns.reverse() // [ [f: C], [f: B], [f: A] ]
  // 最先执行的放到里面 C(B(A))(args)
  /**
   * [Function C] [Function: B]
   * [Function CB累加] [Function: A]
   */
  return fns.reduce((accumulator, current) => {
    // return (...args) => accumulator(current(...args))
    console.log(accumulator)
    return accumulator.then(() => {
      return current()
    })
  }, Promise.resolve())
}
compose(A, B, C)
