module.exports = {
  importWorkboxFrom: 'cdn',
  cacheId: 'Chika.dance',
  offlineGoogleAnalytics: true,
  importsDirectory: './wb-assets',
  clientsClaim: true,
  exclude: [/\.map$/, /precache-manifest.*.js/],
  swDest: 'sw.js',
  manifestTransforms: [
    // exclude from sw
    (originalManifest) => {
      const manifest = originalManifest.filter(
        (entry) => entry.url !== '_redirects')
      return { manifest }
    }
  ]
}
