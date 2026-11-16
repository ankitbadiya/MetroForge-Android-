const CACHE = 'metroforge-shell-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest'];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(SHELL);
    self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('metroforge-') && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const hit = await cache.match(req);
      if (hit) return hit;
      try {
        const fresh = await fetch(req);
        if (fresh && fresh.ok) cache.put(req, fresh.clone());
        return fresh;
      } catch (_) {
        return hit || new Response('Offline resource unavailable', {status: 503});
      }
    })());
  } else {
    // Cache CDN scripts, CSS, and font resources after first successful online use.
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const hit = await cache.match(req, {ignoreVary:true});
      if (hit) return hit;
      try {
        const fresh = await fetch(req);
        try { cache.put(req, fresh.clone()); } catch (_) {}
        return fresh;
      } catch (_) {
        return hit || new Response('', {status: 504});
      }
    })());
  }
});
