let path = require('path')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
module.exports = {
  // trick I googled to show the app version in the app
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        let v = JSON.stringify(require('./package.json').version)
        args[0]['process.env']['VERSION'] = v
        return args
      })
  },

  configureWebpack: config => {
    // purgecss
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './../src/index.html'),
              path.join(__dirname, './../**/*.vue'),
              path.join(__dirname, './../src/**/*.js')
            ])
          })
        ]
      }
    }
    // ionicons
    return {
      resolve: {
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
