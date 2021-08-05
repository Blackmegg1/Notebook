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
    "revision": "da3c0c13938f4a27a41259ccf36c1b74"
  },
  {
    "url": "about/index.html",
    "revision": "5300fd7f799838ff609472839b1c22b7"
  },
  {
    "url": "assets/css/0.styles.c14b62c2.css",
    "revision": "78d28295254671e1d0cbd7d91a1823e9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3a590aa5.js",
    "revision": "904c3fdfbfaf7ffa4b312221b8aacb76"
  },
  {
    "url": "assets/js/11.121838fe.js",
    "revision": "7b90bb56c8d551907e87ac73aac64525"
  },
  {
    "url": "assets/js/2.5670f178.js",
    "revision": "7c3ce53c9c5f85f0925467e944e163fc"
  },
  {
    "url": "assets/js/3.c7adb8a4.js",
    "revision": "a359918609e3cb04b9c26a158f8eeeb2"
  },
  {
    "url": "assets/js/4.a15a86a5.js",
    "revision": "3dc6131862861b956f1c8466dda77a03"
  },
  {
    "url": "assets/js/5.704a2c3a.js",
    "revision": "abeecc03bf4b3851ee736ab48a132078"
  },
  {
    "url": "assets/js/6.760b40be.js",
    "revision": "d431d4657a8366d4c5ddd5ddf7a56564"
  },
  {
    "url": "assets/js/7.be80b1a5.js",
    "revision": "58e1c23494f385a9e21fe70b441da7c8"
  },
  {
    "url": "assets/js/8.57ebe38d.js",
    "revision": "9e6f855029221339d9439aceddf48357"
  },
  {
    "url": "assets/js/9.53521387.js",
    "revision": "1bb121aaa7120da211f0f769ef624890"
  },
  {
    "url": "assets/js/app.cc42cfdd.js",
    "revision": "3709dcc8a6958f0893783a08464aad3b"
  },
  {
    "url": "guide/index.html",
    "revision": "03d2968e9b1f9c9c3452681206cfff9d"
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
    "revision": "2ab98550f80d719ad7d3e1cc13a2b072"
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
