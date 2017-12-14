const path = require('path')

module.exports = {

  hooks: {
    page: require('./lib/page'),
    finish: function () {
      const file = path.resolve(__dirname, '../disqus-proxy-core/lib/disqus-proxy-core.js')
      this.output.copyFile(file, 'scripts/disqus-proxy-core.js')
    }
  }
}
