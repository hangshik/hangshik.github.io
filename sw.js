// sw.js - 기본 서비스 워커
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // PWA 오프라인 기본 핸들러
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});