module.exports = {
  importWorkboxFrom: 'cdn',
  cacheId: 'Chika.dance',
  offlineGoogleAnalytics: true,
  importsDirectory: './wb-assets',
  clientsClaim: true,
  exclude: [/\.map$/, /precache-manifest.*.js/],
  swDest: 'sw.js'
}
