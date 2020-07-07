
import Chunk from './chunk.js'
import Tool from './tool'
import { rejects } from 'assert';

class Main {
  constructor(config) {
    const { version, projectName, resources, publicPath, fallbackCDN = '', fallbackCDN2 = '' } = config
    this.version = '__LINJIAYU__BUILD_VERSION__' + version
    this.projectName = projectName
    this.resources = resources
    // 资源CDN
    this.publicPath = publicPath
    this.fallbackCDN = fallbackCDN ? fallbackCDN : publicPath
    this.fallbackCDN2 = fallbackCDN2 ? fallbackCDN2 : this.fallbackCDN 
    this.CDNs = [this.publicPath, this.fallbackCDN, this.fallbackCDN2]

    // 资源队列中
    this.chunksQueue = []
    this._initChunk()
  }

  start () {
    // 第一步先去判断 是否支持 promise 和 localStorage
    try {
      if (Tool.supportLS == false || Tool.supportPromise == false) {
        // 走fallback逻辑
        this._chunksfallback()
      } else {
        this._promiseAll()
        // 支持 promise 和 ls
        // this._chunksfallback()
      }
    } catch (error) {
      // 走fallback逻辑
      this._chunksfallback()
    }
  }

  // 初始化资源 放到资源队列中
  _initChunk () {
    this.resources.forEach(item => {
      this.chunksQueue.push(new Chunk(this.CDNs, this.projectName, item))
    })
  }

  // [并行异步]
  _promiseAll () {
    // 每个部分都是个Promise
    const jobs = this.chunksQueue.map(chunk => new Promise((resolve, reject) => {
      // chunk load后, 数据会保存在content里面
      chunk.load().then(
        () => resolve(chunk), // 成功走这个逻辑
        () => reject(chunk) // 失败走这个逻辑
      )
    }))

    Promise.all(jobs)
    .then(chunks => chunks.forEach(c => c.render()))
    .catch(err => {
      console.log('最开始 并行请求失败')
      // 一旦资源有错误, 会走这个逻辑, 如果[a, b, c]  
      // a,b 已经有返回会将值保存在content里, c没有则要去走重试逻辑
      this._chunksfallback()
    })
  }

  // [串行异步] 资源全部走fallback逻辑 
  _chunksfallback () {
    // this.chunksQueue[0].fallback(this.chunksQueue[1].fallback()) 每一个函数都跟着下一个函数内容
    this.chunksQueue.reduce((prev, next) => {
      return prev.then(() => next.fallback())
    }, Promise.resolve())

    // 串行操作
    /*
      const aysncfn = timer => new Promise((resolve) => { 
        setTimeout(() => {
          console.log(timer)
          resolve(1)
        }, timer) 
      })
      const queue = [aysncfn(1000), aysncfn(3000), aysncfn(5000)]
      queue.reduce((prev, next) => {
        console.log(prev, next)
        return prev.then(() => next)
      }, Promise.resolve(0))
    */
  }
}

export default Main