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
    "revision": "6be19539f32aa3cbfeed74e7c006c6f9"
  },
  {
    "url": "about/index.html",
    "revision": "c0598c713216bbea96b06914c95ea4ed"
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
    "url": "assets/js/app.698492e0.js",
    "revision": "81125d9ff29f4148d1b6399f7aa39680"
  },
  {
    "url": "basic/algorithm/index.html",
    "revision": "8e333abb93545236133ea0638d4741ce"
  },
  {
    "url": "basic/git/An annoying pitfall about Git.html",
    "revision": "8a26fa4fd688fe8ccbd95e124a85473e"
  },
  {
    "url": "basic/git/index.html",
    "revision": "5e66a7605ae990e746f8ca82570aafc1"
  },
  {
    "url": "basic/network/index.html",
    "revision": "a7d4d0f748ea6800026e5b6018c68ee6"
  },
  {
    "url": "basic/other/index.html",
    "revision": "21df2713199bbb97faec0440d38ffd9c"
  },
  {
    "url": "basic/other/字符与编码.html",
    "revision": "40090be7574e397178a504167339abb8"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "74a3e3fd24bba80557ef3494281874fc"
  },
  {
    "url": "frontend/css/P129-P161.html",
    "revision": "d1f15a250a82197ae7a4c553fda9077e"
  },
  {
    "url": "frontend/css/P165-P188.html",
    "revision": "a02872276b96a496343fec84439abcf3"
  },
  {
    "url": "frontend/css/P222-P250.html",
    "revision": "b4cb0a1a042c9b8a9b4232829d8f73a4"
  },
  {
    "url": "frontend/css/P275-.html",
    "revision": "44600982fc8a80cad32ee9fe2bdc458e"
  },
  {
    "url": "frontend/html/index.html",
    "revision": "658deae90a24bb307726ab31e0aba6f9"
  },
  {
    "url": "frontend/js/'this'的指向.html",
    "revision": "1bbcaae2f845708659460ad6042faa94"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "090e3dc31a81074a28b8da0981587d12"
  },
  {
    "url": "frontend/js/JS习题册.html",
    "revision": "1037acd24946fb90225bf060923fdac8"
  },
  {
    "url": "frontend/js/JS习题册答案.html",
    "revision": "ccacf60dd6a466b48ce3ac2b5eae2187"
  },
  {
    "url": "frontend/js/防抖、节流和RAF.html",
    "revision": "6cdbe9621bd70c8f111599a684e9c7bb"
  },
  {
    "url": "guide/index.html",
    "revision": "65ea82138d899b22fdf34d0bae6918f1"
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
    "revision": "4befe6984115dfe71144336519185c4c"
  },
  {
    "url": "other/philosophy/index.html",
    "revision": "26dbf8cc4f967244dec77773fe0140ad"
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
