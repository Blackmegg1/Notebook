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
    "revision": "bd6c7f1914c894a8a1dd23139638fa15"
  },
  {
    "url": "about/index.html",
    "revision": "a3b976d92edb38d4b35151b297c24336"
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
    "url": "assets/js/10.ea1077f3.js",
    "revision": "99840a3e041f5ea33c7cfa4b70104eb3"
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
    "url": "assets/js/25.98ef4e6e.js",
    "revision": "1324df25c786cb5da778cf54dd7c3e16"
  },
  {
    "url": "assets/js/26.104728fd.js",
    "revision": "e869349e8dad3b013077c0cd819fce11"
  },
  {
    "url": "assets/js/27.c63d59b1.js",
    "revision": "78e56835891fbd3359f74aa2c1708aee"
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
    "url": "assets/js/app.2d897e8a.js",
    "revision": "169185eeb94b4afb948c1a3b7172cf3f"
  },
  {
    "url": "basic/algorithm/index.html",
    "revision": "b558c94f30db9e91c16d9a3de23afbcf"
  },
  {
    "url": "basic/git/An annoying pitfall about Git.html",
    "revision": "f996fb679b7ab16ed13622a16ae42a03"
  },
  {
    "url": "basic/git/index.html",
    "revision": "93f0a984ab21fc3d1bd77bb5ac60d6ed"
  },
  {
    "url": "basic/network/index.html",
    "revision": "a45088c01969751a3b25d1a9d7872ee4"
  },
  {
    "url": "basic/other/index.html",
    "revision": "12f10a4838d3bd4e1c1d79f7d263bd37"
  },
  {
    "url": "basic/other/字符与编码.html",
    "revision": "9f10d1c61c4eef82ff69b51f4cd6074c"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "75fd7c8b7c28a5f4a8b19014a325f4da"
  },
  {
    "url": "frontend/css/P129-P161.html",
    "revision": "118486a7c970d9900b43374ee34e4045"
  },
  {
    "url": "frontend/css/P165-P188.html",
    "revision": "6a224f485941ce8b2d90204b6ec86835"
  },
  {
    "url": "frontend/css/P222-P250.html",
    "revision": "3ab42873371493cdfba2d1d4f87e5d10"
  },
  {
    "url": "frontend/css/P275-.html",
    "revision": "71138cf8f48fb377cb872593f0f83cc5"
  },
  {
    "url": "frontend/html/index.html",
    "revision": "b1232b1903c4af2f425d9acd013edbec"
  },
  {
    "url": "frontend/js/'this'的指向.html",
    "revision": "479740a0a8e7a4a0c93cffd61ae977e8"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "b1e0a1d3b266fdf79899007f58e61a59"
  },
  {
    "url": "frontend/js/JS习题册.html",
    "revision": "6bb1c17ffd220c8c867ce41769047450"
  },
  {
    "url": "frontend/js/JS习题册答案.html",
    "revision": "f6986f7c3f447fca044e696ced72a558"
  },
  {
    "url": "frontend/js/防抖、节流和RAF.html",
    "revision": "617092b555e2ef9980fbaa1cebf4dcce"
  },
  {
    "url": "guide/index.html",
    "revision": "411e61b312e914683b38709998e4dda3"
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
    "revision": "b71d82f4a9f2d976184ce13b137ec0e9"
  },
  {
    "url": "other/philosophy/index.html",
    "revision": "cd855786bf122f3794a7bb2844624067"
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
