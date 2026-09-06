const RETIRED_CACHE_PREFIXES = ["grovex", "next-static"];

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names
          .filter((name) => RETIRED_CACHE_PREFIXES.some((prefix) => name.toLowerCase().includes(prefix)))
          .map((name) => caches.delete(name)),
      ))
      .then(() => self.registration.unregister())
      .then(() => self.clients.claim()),
  );
});
