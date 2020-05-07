
/**
 * 基本数据类型: number, string, boolean, null, undefined, Object
 * Object类型: Function, Array, RegExp, Date, Error....
 */

// 1. typeof
const _typeof = data => console.log(typeof data)

_typeof(123) // number
_typeof('123') // string
_typeof(false) // boolean
_typeof(null) // object
_typeof(undefined) // undefined

_typeof(() => {}) // function

_typeof({ 1: 1, 2: 2}) // object
_typeof([1, 2, 3]) // object
_typeof(new Date()) // object
_typeof(new Error()) // object


// 2. Object.prototype.toString
const _object_toString = data => {
  console.log(`${data}: `)
  // 为啥 Object.prototype.toString.call, 需要.call ???
  console.log(Object.prototype.toString.call(data))
}

_object_toString(123) // [object Number]
_object_toString('123') // [object String]
_object_toString(true) // [object Boolean]
_object_toString(undefined) // [object Undefined]
_object_toString(null) // [object Null]

_object_toString(() => {}) // [object Function]

_object_toString([1, 2, 3]) // [object Array]
_object_toString({ 1: 1, 2: 2}) // [object Object]
_object_toString(new Date()) // [object Date]
_object_toString(new Error()) // [object Error]
_object_toString(Math) // [object Math]
_object_toString(JSON) // [object JSON]