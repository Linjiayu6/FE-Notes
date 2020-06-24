
import Chunk from './chunk.js'
import Tool from './tool'

class Main {
  constructor(config) {
    const { version, projectName, resources, cdns } = config
    this.version = '__LINJIAYU__BUILD_VERSION__' + version
    this.projectName = projectName
    this.resources = resources
    this.cdns = cdns

    // 资源处理队列
    this.queue = []
    this.initChunk()
  }

  start () {
    // 第一步先去判断 是否支持 promise 和 localstorage  // TODO: 是否支持 Promise?
    if (!Tool.supportLS) return
    Promise.all(
      this.queue.map(q => {
        new Promise((resolve, reject) => {
          q.load()
        })
      })
    ).then(elList => {
      console.log(elList)
    })
  }

  initChunk () {
    this.resources.forEach(item => {
      this.queue.push(new Chunk(this.cdns, this.projectName, item)) // 放入队列中执行
    })
  }
}

export default Main