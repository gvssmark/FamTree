self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/FamTree/',
      '/FamTree/index.js',
       '/FamTree//index.html',
      '/FamTree/images/i192.png',
      '/FamTree/images/FT192.png',
      '/FamTree/images/FT512.png',
      
      ])),
  );
});

self.addEventListener('fetch', (e) => {
//  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});








