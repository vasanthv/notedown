/**
 * Notedown Service worker
 * Version: 0.1.1
 */

const currentCacheName = "notedown.vasanthv.com";

self.addEventListener("install", function(e) {
	console.log("Install event triggered. New updates available.");
	const filesToCache = [
		"/",
		"/style.css",
		"/script.js",
		"/manifest.json",
		"/droidserif-italic.ttf",
		"/droidserif.ttf",
		"/simplemde/simplemde.min.css",
		"/simplemde/simplemde.min.js",
		"/icomoon/style.css",
		"/icomoon/fonts/icomoon.svg",
		"/icomoon/fonts/icomoon.ttf",
		"/icomoon/fonts/icomoon.eot",
		"/icomoon/fonts/icomoon.woff",
	];

	// Deleting the previous version of cache
	e.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.filter((cacheName) => cacheName != currentCacheName).map((cacheName) => caches.delete(cacheName))
			);
		})
	);

	// add the files to cache
	e.waitUntil(
		caches.open(currentCacheName).then(function(cache) {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", function(event) {
	event.respondWith(
		caches.match(event.request).then(function(cache) {
			return cache || fetch(event.request);
		})
	);
});
