
import Chunk from './chunk.js'
import Tool from './tool'

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
        console.log(Tool.supportLS)
        // 走fallback逻辑
        this._chunksfallback()
      } else {
        // this._promiseAll()
        this._chunksfallback()
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

  // 资源并行异步加载
  _promiseAll () {
    // 每个部分都是个Promise
    const jobs = this.chunksQueue.map(chunk => new Promise(resolve => {
      chunk.load().then(content => resolve(chunk))
    }))
    // job里是 是返回有内容的chunks
    Promise.all(jobs)
    .then(chunks => chunks.forEach(c => c.render()))
    .catch(err => console.error(err))
  }

  // 资源全部走fallback逻辑
  _chunksfallback () {
    this.chunksQueue.forEach(chunks => {
      chunks.fallback()
    })
  }
}

export default Main