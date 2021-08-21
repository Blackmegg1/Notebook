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
    "revision": "41d0b16d01c2b31e6fe55037dc403272"
  },
  {
    "url": "about/index.html",
    "revision": "bafa563c7adc7358cd30b4f5fd3ee441"
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
    "url": "assets/js/10.690e1b82.js",
    "revision": "762d1c73e3b34c689e36457e5167a85a"
  },
  {
    "url": "assets/js/11.12a41abe.js",
    "revision": "d45f113ddc4a781d1b9425c5e8c1d508"
  },
  {
    "url": "assets/js/12.bcf89e87.js",
    "revision": "9a3311386672356aadd648767fbe28cf"
  },
  {
    "url": "assets/js/13.7e7cd09c.js",
    "revision": "865b194f614ef6a6c3de892a7d9db092"
  },
  {
    "url": "assets/js/14.7ce9366d.js",
    "revision": "5137e71bf9e9ada970cfa146a62a8002"
  },
  {
    "url": "assets/js/15.d6d57049.js",
    "revision": "bdc239bc90a993222c502a9552598cd3"
  },
  {
    "url": "assets/js/16.22341b27.js",
    "revision": "fbf2226df9ededb38ef2a7084ba1a9e3"
  },
  {
    "url": "assets/js/17.15abb292.js",
    "revision": "5adae2db0d8bf564e9db27bc1dd1bbd7"
  },
  {
    "url": "assets/js/18.3f62e3b6.js",
    "revision": "3df4ceb19cf57e9ac866351564d1b6be"
  },
  {
    "url": "assets/js/19.0c10fd73.js",
    "revision": "b5592d9f3865b49e6f607c0f494ae54f"
  },
  {
    "url": "assets/js/2.1aeebccc.js",
    "revision": "76045c02931513019e96b3809c1d1efa"
  },
  {
    "url": "assets/js/20.ce4ac51f.js",
    "revision": "01b4b2a44b98eeaf95af051c2648c42e"
  },
  {
    "url": "assets/js/21.eed478b5.js",
    "revision": "18d35ae28b4b3a272d57d7953b9fc4c9"
  },
  {
    "url": "assets/js/22.06347cdc.js",
    "revision": "177eaf8063e4acde8c0d135592713e34"
  },
  {
    "url": "assets/js/23.50d3bd24.js",
    "revision": "bb5b9f79630d953e361f3b6e8cd8b0cc"
  },
  {
    "url": "assets/js/24.b9d6f4d0.js",
    "revision": "64226ae464ec3fca62faad18bf1443f6"
  },
  {
    "url": "assets/js/25.4408b39b.js",
    "revision": "0213a30b04c30a135b35626e3ae1c648"
  },
  {
    "url": "assets/js/26.104728fd.js",
    "revision": "e869349e8dad3b013077c0cd819fce11"
  },
  {
    "url": "assets/js/27.689f5f50.js",
    "revision": "2c47c103665826f364d78ccf3270e4a2"
  },
  {
    "url": "assets/js/28.a9fb6234.js",
    "revision": "1007ab9290405c2ad5e54f0bc4abdb2c"
  },
  {
    "url": "assets/js/29.eee6a5c5.js",
    "revision": "4a726128e61d47c1428579304a862d12"
  },
  {
    "url": "assets/js/3.aa8f0b53.js",
    "revision": "4863a22e9dad507150c77ff2efb96ac5"
  },
  {
    "url": "assets/js/4.f7db42f0.js",
    "revision": "bb1b326d97d845fe1084c16563d1e2df"
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
    "url": "assets/js/9.32d381e3.js",
    "revision": "2875c125d7d4ac0f055aa76e9cb83eaa"
  },
  {
    "url": "assets/js/app.86e7110e.js",
    "revision": "1a7a77157f78a013bc332ed7ebefcdc2"
  },
  {
    "url": "basic/algorithm/index.html",
    "revision": "d6616f5db01a083f632459ad9b48820f"
  },
  {
    "url": "basic/git/An annoying pitfall about Git.html",
    "revision": "353044b30835ec9fed7ccf4fa6e2f1ba"
  },
  {
    "url": "basic/git/index.html",
    "revision": "d0a639111e4c7fe3483c681b06b04e2e"
  },
  {
    "url": "basic/network/index.html",
    "revision": "b8fd28f6e3756996d73214920a4ff70c"
  },
  {
    "url": "basic/other/index.html",
    "revision": "a257479c0f4a62ce6a5a8684f3821817"
  },
  {
    "url": "basic/other/字符与编码.html",
    "revision": "3b0ed21230044297203404adc28aa05f"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "567fcc2cd9043ed482ff72a70b930ae6"
  },
  {
    "url": "frontend/css/P129-P161.html",
    "revision": "32493e27366e7f6cbc07e93bed9701ed"
  },
  {
    "url": "frontend/css/P165-P188.html",
    "revision": "a4db85efdc675ec8b72c363d70a62d7e"
  },
  {
    "url": "frontend/css/P222-P250.html",
    "revision": "da765fede3e0b7972af5020d39fd0098"
  },
  {
    "url": "frontend/css/P275-.html",
    "revision": "88abf35d4265e02ca7edd1425ff62f1c"
  },
  {
    "url": "frontend/html/index.html",
    "revision": "5db6a8a94fecec01790630e89f1eed2e"
  },
  {
    "url": "frontend/js/'this'的指向.html",
    "revision": "8769a9ab4a384e266a6db441fb0c653c"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "502b2c95a63c036e82df6c78d9866cc1"
  },
  {
    "url": "frontend/js/JS习题册.html",
    "revision": "953e97c69a7728932fd988d9ba5dfc55"
  },
  {
    "url": "frontend/js/JS习题册答案.html",
    "revision": "d1c0a8a6af0e6cf92c82ba490dab1094"
  },
  {
    "url": "frontend/js/防抖、节流和RAF.html",
    "revision": "4be560b4bc0117a2371a792d5fd508dd"
  },
  {
    "url": "guide/index.html",
    "revision": "0e7aedeb420b918de3230f8bd64c92a9"
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
    "revision": "28540fb224a6fdb9403f9b41a3e5e1c8"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "7a8cf9850ee503212e56aec34136c09d"
  },
  {
    "url": "index.html",
    "revision": "ddcccca21bc2c6a28295cd06159baca2"
  },
  {
    "url": "other/philosophy/index.html",
    "revision": "ace8e904b2280038a509e8f271db99d7"
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