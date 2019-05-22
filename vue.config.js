let path = require('path')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')

const PATHS = {
  src: path.join(__dirname, 'src')
}

module.exports = {
  configureWebpack: config => {
    return {
      plugins: [ // purgecss
        new PurgecssPlugin({
          paths: glob.sync([
            path.join(__dirname, './src/index.html'),
            path.join(__dirname, './**/*.vue'),
            path.join(__dirname, './src/**/*.js')
          ])
        })
      ],
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
