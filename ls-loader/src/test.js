// 异步的串行操作
const fn = timer => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(timer)
    resolve(timer)
  }, timer)
})

// // first执行
// fn(1000)
// .then((prev_data) => {
//   // fn(prev_data + 1000)
//   .then((prev_data) => {
//     // fn(prev_data + 1000)
//     .then((prev_data) => {
//       // console.log(prev_data)
//     })
//   })
// })

const queue = [fn, fn, fn, fn]
// array.reduce((prev, curr) => 操作, 初始化值)
queue.reduce((prev, curr) => {
  console.log(prev, curr)
  return prev.then((data) => curr(data))
}, Promise.resolve(1000))
