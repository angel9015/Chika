let path = require('path')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')

const PATHS = {
  src: path.join(__dirname, 'src')
}

module.exports = {
  configureWebpack: config => {
    return {
      resolve: { // ionicons
        alias: {
          'icons': path.resolve(__dirname, 'node_modules/vue-ionicons/dist')
        }
      }
    }
  },

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,

  css: {
    sourceMap: true
  }
}
