
const pluginName = 'SelfServicePlugin'

class SelfServicePlugin {
  constructor (options) {
    this.options = options
  }
  apply (compiler) {
    // compiler webpack配置
    compiler.plugin('emit', compilation => {
      // compilation 是一次资源版本构建
      console.log('构建开始', this.options)
      console.log('compilation', compilation.assets)
    })
  }
}
module.exports = SelfServicePlugin