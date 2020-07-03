// 浅拷贝
const shallowClone = target => {
  // for in + hasOwnProperty 或 Object.keys()
  const result = {}
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      result[key] = target[key]
    }
  }
  return result
}

// 1. 深拷贝: 递归 + 浅拷贝
const deepClone1 = target => {
  const result = {}
  
  Object.keys(target).forEach(key => {
    const value = target[key]
    // Object.prototype.toString.call(value) 类型判断
    if (Object.prototype.toString.call(value) === '[object Object]') {
      result[key] = deepClone1(value)
    } else {
      result[key] = value
    }
  })
  return result
}

const obj = { a: { b: 1 } }
const obj1 = deepClone1(obj)

// 2. JSON
JSON.parse(JSON.stringify(obj))

// 3. 深拷贝: 浅拷贝 + 迭代 + 重复引用处理
const deepClone2 = source => {
  const dictionary = {}
  const result = {}

  const stack = [{ source, result }]
  while (stack && stack.length !== 0) {
    const { source, result } = stack.shift() // 从头移除一个 或用 pop也行

    Object.keys(source).forEach(key => {
      const value = source[key]

      if (dictionary[value] === value) {
        console.error('err 重复引用类型')
        return 
      }

      dictionary[value] = value
      if (Object.prototype.toString.call(value) === '[object Object]') {
        result[key] = {}
        stack.push({ source: value, result: result[key] })
      } else {
        result[key] = value
      }
    })
  }
  return result
}

const obj = { a: { b: 1 } }
const obj1 = deepClone2(obj)