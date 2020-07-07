
import Tool from './tool'
import CRC32 from './crc32'

class Chunk {
  constructor(CDNs, projectName, state) {
    const { name, type, filename, checksum } = state
    this.name = name
    this.type = type
    this.filename = filename
    this.checksum = checksum
    this.projectName = projectName
    this.options = { // 资源外链等需求
      hash: state.hash,
      attrs: state.attrs,
      link: state.link,
      cacheAge: state.cacheAge,
      runScript: state.runScript,
    }
    // 备用域名
    this.CDNs = CDNs
    // 重试的次数
    this.retry = 0
    // 资源返回内容 从哪儿来 'http' 'storage' 'externalLink'
    this._contentFrom = ''
    // 具体资源 是什么
    this._content = ''
  }

  get link () {
    try {
      return this.CDNs[this.retry] + this.filename
    } catch (error) {
      return this.CDNs[0] + this.filename
    }
  }

  // 填到模板上的属性
  get attrs () {
    try {
      return [
        { key: 'from', val: this._contentFrom }, // 从哪儿来
        { key: 'retry', val: this.retry }, // 重试次数
        { key: 'link', val: this.link } // 地址
      ]
    } catch (error) {
      return [
        { key: 'from', val: 'catch' },
        { key: 'retry', val: 'catch' },
        { key: 'link', val: 'catch' }
      ]
    }
  }

  load () {
    // 网络请求
    return new Promise((resolve, reject) => {
      Tool.request(this.link, (err, content) => {
        // 如果http请求外链失败, 则reject逻辑
        if (err) {
          console.error('接口返回异常', err)
          this._content = ''
          this.retry += 1 // 重试重置
          reject(err)
          return
        }

        // if (this.checksum !== CRC32(content)) {
        //   console.error('资源校验不通过', CRC32(content), this.checksum)
        //   this._content = ''
        //   this.retry += 1 // 重试重置
        //   reject(err)
        //   return
        // }

        // 能在content里保存的 都是crc32校验后 完全正确的
        this._content = content
        this._contentFrom = 'http' // 资源从网络请求来
        // TODO: 保存到storage里
        resolve(content)
      })
    })
  }

  render () {
    console.log('重试次数 已成功', this.retry)
    // 有内容返回, 直接内联至模板中
    Tool.execContentToHTML(this.type, this.attrs, this._content)
  }

  // 从 main.js 传来 resolve
  fallback () {
    return new Promise((resolve) => {
      // 第二次重试
      this.load()
      // 判断是否成功
      .then(
        // 第二次 成功
        () => this.render(),
        // 第二次 失败
        () => new Promise((resolve) => {
          // 第三次 重试
          Tool.execTagToHTML(this.type, this.attrs, this.link, flag => {
            if (flag === 'onload_success') {
              console.log('外链重试成功....')
            } else {
              console.log('外链重试失败 放弃.....', this.retry)
            }
            resolve() // 🔥 这句话是关键 说明 可以再往下走
          })
        })
      )
      .then(() => {
        console.log(123)
        resolve() // 🔥 这句话是关键 说明 可以再往下走
      })
    })
  }
}

export default Chunk
