
import Tool from './tool'

class Chunk {
  constructor(cdns, projectName, state) {
    const { name, type, filename, checksum } = state
    this.cdns = cdns
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
    this.domainIndex = 0
    this.domain = this.cdns[this.domainIndex]
    this.retry = 1
  }


  load () {
    const cb = (result, el) => { 
      if (result === 'error') {
        if (this.domainIndex < this.cdns.length - 1) {
          this.retry += 1
          this.domainIndex += 1
          this.domain = this.cdns[this.domainIndex]
          console.log('已经重试了几次?', this.retry)
          el.src = this.domain + this.filename
          el.setAttribute('retry', this.retry)
        }
      }
    }
    // 直接外链增加到HTML上
    Tool.execTagToHTML(
      this.type, 
      [{ key: 'key', val: 'external' }], 
      this.domain + this.filename,
      cb
    )
  }
}

export default Chunk