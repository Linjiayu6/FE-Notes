
import Tool from './tool'

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
    return this.httpFetch()
  }

  render () {
    // 有内容返回, 直接内联至模板中
    Tool.execContentToHTML(this.type, this.attrs, this._content)
  }

  httpFetch () {
    return new Promise((resolve, reject) => {
      Tool.request(this.link, (err, content) => {
        // 如果http请求外链失败, 则reject逻辑
        if (err) {
          this.retry += 1 // 重试重置
          return reject(err)
        } else {
          this._content = content
          this._contentFrom = 'http' // 资源从网络请求来
          // TODO: 保存到storage里
          resolve(content)
        }
      })
    })
  }

  fallback () {
    return new Promise((resolve, reject) => {
      this._contentFrom = 'externalLink' // 内容从外链来
      Tool.execTagToHTML(this.type, this.attrs, this.link, flag => {
        if (flag === 'onload_success') {
          console.log('加载成功了')
          resolve()
          return
        }

        this.retry += 1 // 重试次数
        console.log('加载失败 重试ing', this.retry)

        // Tool.execTagToHTML(this.type, this.attrs, this.link, flag => {
        //   if (flag === 'onload_success') {
        //     console.log('加载成功了')
        //     return
        //   }

        //   console.log('加载失败 重试ing', this.retry)
        // })
      })
    })
  }
}

export default Chunk