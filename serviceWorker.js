const staticDelCake= "del-cake-site-v1"
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/Anniversary1.jpg",
    "/images/Anniversary2.jpeg",
    "/images/Anniversary3.jpeg",
    "/images/Birthday1.jpeg",
    "/images/Birthday2.jpeg",
    "/images/Birthday3.jpeg",
    "/images/Wedding1.jpeg",
    "/images/Wedding2.jpg",
    "/images/Wedding3.jpeg",
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(staticDelCake).then(cache => {
        cache.addAll(assets)
      })
    );
  });

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    );
});