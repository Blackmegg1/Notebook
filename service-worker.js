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
    "revision": "07d62c8b99aa1374c36ff5333924344c"
  },
  {
    "url": "about/index.html",
    "revision": "80abb052dc83b7ed2db40a55f72f5a2c"
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
    "url": "assets/js/13.c7cefa8f.js",
    "revision": "8e4c963ab3c3987c95c9f55c83250761"
  },
  {
    "url": "assets/js/14.7a6b195c.js",
    "revision": "4b1484109375729e7cb9bdff7e72663e"
  },
  {
    "url": "assets/js/15.7bf5fcb8.js",
    "revision": "15838d98c32dca15727ead99cf820471"
  },
  {
    "url": "assets/js/16.fed97178.js",
    "revision": "213edea83d4425c3d3d4399fdf1ece69"
  },
  {
    "url": "assets/js/17.0c31ef4a.js",
    "revision": "a2c1fa54657aa4b0045c7e0132092ce0"
  },
  {
    "url": "assets/js/18.c9310bef.js",
    "revision": "c8d40d3b4b43734e011e21f781ea5306"
  },
  {
    "url": "assets/js/19.6daf72c3.js",
    "revision": "1f24e258e9663a52ec8d14f120ed1fd5"
  },
  {
    "url": "assets/js/2.1aeebccc.js",
    "revision": "76045c02931513019e96b3809c1d1efa"
  },
  {
    "url": "assets/js/20.ced0adda.js",
    "revision": "a4973456ef5f4aa53c9ec71ba8efde52"
  },
  {
    "url": "assets/js/21.c0366b98.js",
    "revision": "e430a8f265933b6ba3e1e17c3a090720"
  },
  {
    "url": "assets/js/22.072b11d7.js",
    "revision": "3b95e371c90263a0466c0291a91b98d5"
  },
  {
    "url": "assets/js/23.109d2335.js",
    "revision": "c4406bd4e1a461d2b12b1ae7b8cc667d"
  },
  {
    "url": "assets/js/24.21ad4b7b.js",
    "revision": "ef289de35a927adf05e6e8e245247de1"
  },
  {
    "url": "assets/js/25.ae55b752.js",
    "revision": "ae25a2f2498bb2b161beeab0a90cb57a"
  },
  {
    "url": "assets/js/26.6e135395.js",
    "revision": "760dd72a0b1a55ba8f0d80dd71b93104"
  },
  {
    "url": "assets/js/27.72f9398f.js",
    "revision": "056fd8330b68de434d7f8a59d2758212"
  },
  {
    "url": "assets/js/28.0f5ba096.js",
    "revision": "64459efc60c91d7d08d2e480faa7a33a"
  },
  {
    "url": "assets/js/3.aa8f0b53.js",
    "revision": "4863a22e9dad507150c77ff2efb96ac5"
  },
  {
    "url": "assets/js/4.33cabdfc.js",
    "revision": "282591c567d57dfa6513a31006e9af3c"
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
    "url": "assets/js/app.e5306d19.js",
    "revision": "af5d62432fe34203ecf3db2ec52e517c"
  },
  {
    "url": "basic/algorithm/index.html",
    "revision": "0133b33c1fd6eea4d86c4b97cbb5ace2"
  },
  {
    "url": "basic/git/An annoying pitfall about Git.html",
    "revision": "c267d4b515c5b4cbdb07365d07ba7f69"
  },
  {
    "url": "basic/git/index.html",
    "revision": "77a07f817408b592b7843620555448f6"
  },
  {
    "url": "basic/network/index.html",
    "revision": "403659788b7e9c88a55fef84dc4d4665"
  },
  {
    "url": "basic/network/JavaScript基础知识.html",
    "revision": "13173018e85f46dd97ee5eb80afb6975"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "0d7e3e403c3f1f0c522b717e45080599"
  },
  {
    "url": "frontend/css/P129-P161.html",
    "revision": "24d6c3d571255875e4935cfc4467d9fd"
  },
  {
    "url": "frontend/css/P165-P188.html",
    "revision": "58be3521a9f3dd5eb231dc9925597738"
  },
  {
    "url": "frontend/css/P222-P250.html",
    "revision": "345b3079cb09f77be6fa60ee62f81ac4"
  },
  {
    "url": "frontend/css/P275-.html",
    "revision": "8da46067dd77c646cafc724773712dc8"
  },
  {
    "url": "frontend/html/index.html",
    "revision": "38a30036301c9b2e1f763c7b44503d12"
  },
  {
    "url": "frontend/js/'this'的指向.html",
    "revision": "9d7bbe3321f2011b2047f6893ae9da2c"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "5345c6467dbe2334c0431f304c968ec1"
  },
  {
    "url": "frontend/js/JS习题册.html",
    "revision": "84882466fd3341a070391f8fd81cc91a"
  },
  {
    "url": "frontend/js/JS习题册答案.html",
    "revision": "314dd44174007b095d13333f1e454f11"
  },
  {
    "url": "frontend/js/防抖、节流和RAF.html",
    "revision": "dd7d9d7d96575240746b7f97999d0ff6"
  },
  {
    "url": "guide/index.html",
    "revision": "51e9c62b26a5f1c31de6b4eab34ad73f"
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
    "revision": "00b9578f12b63e11afc58b66534c6b5d"
  },
  {
    "url": "other/philosophy/index.html",
    "revision": "e391791d3fdb229586cbcdc4559e9c17"
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
