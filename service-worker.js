/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "29625538f1522bb828361900296536dd"
  },
  {
    "url": "about.html",
    "revision": "27c67759eed5d789a9ffe991c12d6d1e"
  },
  {
    "url": "assets/css/0.styles.48e1f750.css",
    "revision": "2e4048f3a39eb6e4eac7cd202e64b672"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d00917f9.js",
    "revision": "08da6ab1d13a8488af57b93cae5892ee"
  },
  {
    "url": "assets/js/2.a2f19c92.js",
    "revision": "d18f7744883ab5dd128166aac88ace87"
  },
  {
    "url": "assets/js/3.72d84106.js",
    "revision": "a58a06f77c94d4d98ef04c96b13c5da7"
  },
  {
    "url": "assets/js/4.4da87266.js",
    "revision": "4093501600d8df6cc63440f84f40ee6e"
  },
  {
    "url": "assets/js/5.14984804.js",
    "revision": "2d49bd5f87926f25df7d2fd1d5f6b450"
  },
  {
    "url": "assets/js/6.3925d4fe.js",
    "revision": "17232b0475275f73b2371318e962e54e"
  },
  {
    "url": "assets/js/7.00353176.js",
    "revision": "58edfd6b62400e375206deeef9fc32a5"
  },
  {
    "url": "assets/js/8.bf07e0a8.js",
    "revision": "ab0306b7b926b75db0efca4060f771b8"
  },
  {
    "url": "assets/js/9.aff9c84f.js",
    "revision": "fb9fcbe8505d7a97e1d21a5c4e71a8be"
  },
  {
    "url": "assets/js/app.9afe30a7.js",
    "revision": "bcc71936dd9a54dfbf982a1c9ca92a18"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "e363f9cfd7be03ce611d82cce10b0d37"
  },
  {
    "url": "icons/android-chrome-280x280.png",
    "revision": "7ce8fa03401b18a4582f2be95fa8d4e0"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "287a9c35b6182adfc951c83634d7c637"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "35cda10cf2d47cf93a72e8ff76d4a27e"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "7a8cf9850ee503212e56aec34136c09d"
  },
  {
    "url": "index.html",
    "revision": "efba69e3b5b04fab1a8b999195016093"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
