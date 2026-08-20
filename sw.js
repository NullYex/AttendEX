const CACHE_NAME = 'attendex-cache-v29';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './humans-xD.json',
  './subjects-why-not.json',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js',
  'https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/nano.min.css',
  'https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/pickr.min.js',
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;900&display=swap',
  'https://avatars.githubusercontent.com/u/230855043?v=4'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        urlsToCache.map(url => {
          return cache.add(new Request(url, { cache: 'reload' }))
            .catch(err => console.log('SW: Cache add fail for', url));
        })
      );
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200 ||
          (networkResponse.type !== 'basic' && networkResponse.type !== 'cors' && networkResponse.type !== 'opaque')) {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(error => {
        console.warn('Network fetch failed. Offline mode active for:', event.request.url);
      });
    })
  );
});
