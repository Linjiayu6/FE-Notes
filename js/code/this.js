
const _fn = (args) => {
  console.log(args) // Formal parameters 形参
  
  console.log(a) 
  // 下面有变量声明 a 和 函数声明 function a, 函数声明被提升, 且优先级大于变量声明 a
  // 故返回值为 [Function: a]

  console.log(b) 
  // b也是个 function, 但是是变量声明, 声明提升了, 但是解析是按照顺序的
  // 故返回值为 undefined

  var a = 'a_string' // 变量声明
  function a () { console.log('aaa') } // 函数声明
  var b = 'b_string' // 变量声明
  var b = () => {} // 变量声明

  console.log(a) 
  // 因为function a() 被提升到了作用域最上面, 下面就是a = 'a_string', 输出为 a_string
  
  console.log(b)
  // 正常执行顺序 b = () => {}
}

_fn('1')

/**
 * 1
 * [Function: a]
 * undefined
 * a_string
 * [Function: b]
 */
