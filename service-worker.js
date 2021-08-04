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
    "revision": "10d90e29a97b55b18a4105364dea701b"
  },
  {
    "url": "about.html",
    "revision": "0ef170cd31e43c797fd1e5b0f8dffc27"
  },
  {
    "url": "about1.html",
    "revision": "89182dd4c249fa2fa0582c626f9b4a9a"
  },
  {
    "url": "assets/css/0.styles.158ccfcd.css",
    "revision": "3438389bda47e25fee55e10d53a5f0a3"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0e9be619.js",
    "revision": "8f0fa35d0338bd944de3ef519cd64e89"
  },
  {
    "url": "assets/js/11.98b929a0.js",
    "revision": "e54065eb6f26f1ecbdd8737303273f25"
  },
  {
    "url": "assets/js/12.fd0478d1.js",
    "revision": "b0fdaa1b1cea30e5fec7a231e1b423f8"
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
    "url": "assets/js/4.eef6647e.js",
    "revision": "eee05d8ebc89ebfcfad1788ea2e60eed"
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
    "url": "assets/js/8.a91d03c9.js",
    "revision": "d74fc25ca95c5bfac928687ea57abb65"
  },
  {
    "url": "assets/js/9.12930dca.js",
    "revision": "b5cab55ed88c410afc0722df45166655"
  },
  {
    "url": "assets/js/app.89adc90d.js",
    "revision": "f3a5ecd0c60e6c43801ff684a07ecca8"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "e363f9cfd7be03ce611d82cce10b0d37"
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
    "url": "index.html",
    "revision": "0c252199fac26663174d202066e6a7ae"
  },
  {
    "url": "lisao.html",
    "revision": "e14edb0b4f95cdf42629d160b9f450d9"
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
