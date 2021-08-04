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
    "revision": "eea53d78b1725e41a725accfe4cd79cd"
  },
  {
    "url": "about.html",
    "revision": "bf4028e87855fae2b7b1502538ad0698"
  },
  {
    "url": "about1.html",
    "revision": "2f07c51a5d9f35336214e91a0d63daa7"
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
    "url": "assets/js/10.20a2bf37.js",
    "revision": "1ea84a91641ef5b2246b15ea45169f22"
  },
  {
    "url": "assets/js/11.9c193617.js",
    "revision": "6aa92bf260a7ac6218616b446dbf7da7"
  },
  {
    "url": "assets/js/12.fd0478d1.js",
    "revision": "b0fdaa1b1cea30e5fec7a231e1b423f8"
  },
  {
    "url": "assets/js/2.389e6467.js",
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
    "url": "assets/js/9.23d7aac6.js",
    "revision": "a1dc174884a241e9682c6d1e9bb91e3a"
  },
  {
    "url": "assets/js/app.bce44e02.js",
    "revision": "9411512aced96a805f3dda09d7600260"
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
    "revision": "bcf7b74875f86cb17f0f8d6ec28799cb"
  },
  {
    "url": "lisao.html",
    "revision": "696f50231efde5ddc710d9b70e9a58a9"
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
