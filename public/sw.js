const CACHE_NAME = 'sharebill-cache-v2'

const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/favicon.svg',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-maskable-192.png',
  '/icon-maskable-512.png',
]

// 1. Install event: Precache core shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS)
    }),
  )
  self.skipWaiting()
})

// 2. Activate event: Cleanup stale caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key)
          }
        }),
      )
    }),
  )
  self.clients.claim()
})

// 3. Fetch event: Simple and safe caching
self.addEventListener('fetch', (event) => {
  const req = event.request

  // Only handle GET requests
  if (req.method !== 'GET') {
    return
  }

  const url = new URL(req.url)

  // Only handle http and https schemes
  if (!url.protocol.startsWith('http')) {
    return
  }

  // Safety: NEVER cache API responses or dynamic bill data
  if (url.pathname.startsWith('/api/')) {
    return
  }

  // Handle page navigation requests
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone()
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(req, copy)
            })
          }
          return networkResponse
        })
        .catch(async () => {
          // If network fails, check if the requested URL is already cached
          const cached = await caches.match(req)
          if (cached) {
            return cached
          }
          // Otherwise, serve the dedicated offline fallback page
          const fallback = await caches.match('/offline.html')
          if (fallback) {
            return fallback
          }
          return new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: { 'Content-Type': 'text/plain' },
          })
        }),
    )
    return
  }

  // Handle static assets (JS, CSS, images, icons)
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse
        }
        return fetch(req).then((networkResponse) => {
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type === 'basic'
          ) {
            const copy = networkResponse.clone()
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(req, copy)
            })
          }
          return networkResponse
        })
      }),
    )
  }
})
