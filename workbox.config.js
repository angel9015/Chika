module.exports = {
  importWorkboxFrom: 'cdn',
  cacheId: 'Chika.dance',
  offlineGoogleAnalytics: true,
  importsDirectory: './wb-assets',
  clientsClaim: true,
  exclude: [/\.map$/, /precache-manifest.*.js/],
  swDest: 'sw.js',
  manifestTransforms: [
    // Basic transformation add stream
    (originalManifest) => {
      const manifest = originalManifest.push([{ url: 'https://stream.chika.dance/output.webm', revision: 'webm' },
                                        { url: 'https://stream.chika.dance/output.mp4', revision: 'mp4' }])
      return manifest
    }
  ]
}
