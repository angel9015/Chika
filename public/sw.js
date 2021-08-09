self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open('chika.dance').then(function (cache) {
      return cache.match(event.request).then(function (response) {
        var fetchPromise = fetch(event.request).then(function (networkResponse) {
          try {
            cache.add(event.request)
          } catch (e) {
            console.log(`Couldnt't cache  ${event.request}`)
          }
          return networkResponse
        })
        return response || fetchPromise
      })
    })
  )
})
