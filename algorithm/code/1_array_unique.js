
const array = [6, 1, 2, 3, 3, 6, '6']

// 1. ES6 new Set + Array.from
const es6 = () => {
  const set = new Set(array) // Set { 6, 1, 2, 3, '6' }
  const unique = Array.from(set) // [ 6, 1, 2, 3, '6' ]
  return unique
}


// 2. Object
// 注意: 这个方法对 1, '1' 不友好, 下已对类型进行特殊处理
const obj = () => {
  const object = {}
  const newArray = []
  array.forEach(item => {
    const type = typeof item
    if (object[type + item] !== undefined) {
      // console.log(type + item)
    } else {
      object[type + item] = item
      newArray.push(item)
    }
  })

  return newArray
}

// 3. indexOf
const indexOf = () => {
  const newArray = []
  array.forEach(item => {
    if (newArray.indexOf(item) > -1) {
      // console.log(item)
    } else {
      newArray.push(item)
    }
  })

  return newArray
}

// 4. sorted 判断
// 但是会改变原数组的顺序
const sorted_unique = () => {
  const newArray = []
  array.sort().forEach(item => {
    if (newArray.indexOf(item) > -1) {
      //
    } else {
      newArray.push(item)
    }
  })
  return newArray
}
