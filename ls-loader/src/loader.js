
import tools from './tools'

class Loader {
  constructor (config) {
    const { bizId, cdns, chunks, prefix } = config
    this.bizId = bizId
    this.cdns = cdns
    this.chunks = chunks
    this.prefix = prefix
    this.currentCDN = cdns[0]
  }

  init () {
    this.chunks.forEach(chunk => {
      const { type, path } = chunk
      const url = this.currentCDN + this.prefix + this.bizId + '/'+ type + path
      if (type === 'css') {
        tools.handleCss(url)
      }
      if (type === 'js') {
        tools.handleJs(url)
      }
    });
  }
}

export default Loader