self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
     ]);
   })
 );
});

// Cache and return requests
self.addEventListener("fetch", e=>{
  e.respondWith(
      caches.match(e.request).then(response=>{
          return response || fetch(e.request);
      })
  );
});

// Update a service worker
const cacheWhitelist = ['Simon-game'];
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
