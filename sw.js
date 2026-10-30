// Service worker: keeps the app shell available offline. Firebase traffic is never cached.
const CACHE = "hemma-v43";
const SHELL = ["./", "index.html", "app.js", "app.css", "firebase-config.js", "manifest.webmanifest", "icons/icon-192.png", "icons/suhub.svg", "icons/suhub-lockup.png", "icons/suhub-lockup-white.png", "icons/suhub-lockup-tag.png"];
self.addEventListener("install", e => {
  self.skipWaiting();
  // cache:"reload" = always take fresh files from the server, never the browser's HTTP cache
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(p => new Request(p, { cache: "reload" })))));
});
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  // network first, revalidated with the server every time (no stale 10-minute browser cache); cached copy when offline
  const req = e.request.mode === "navigate"
    ? new Request(u.href, { cache: "no-cache", credentials: "same-origin" })
    : new Request(e.request, { cache: "no-cache" });
  e.respondWith(fetch(req).then(r => { if (r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); } return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
});
