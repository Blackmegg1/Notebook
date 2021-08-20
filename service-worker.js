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
    "revision": "614e222040921fa54edcf81fc1471bd8"
  },
  {
    "url": "about/index.html",
    "revision": "c7ac2ac988bc0e4e3432d08dfce8f543"
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
    "url": "assets/js/24.8df6d003.js",
    "revision": "fd53b98ba273dd42a6af4f816d2fa5a8"
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
    "url": "assets/js/app.befcf5ae.js",
    "revision": "780262fe8c15810b3120274d0fc48d95"
  },
  {
    "url": "basic/algorithm/index.html",
    "revision": "e3776ec2e5fd867cb1e7047506aa90ee"
  },
  {
    "url": "basic/git/An annoying pitfall about Git.html",
    "revision": "dce2a31e153529d9785bf3c4856a6865"
  },
  {
    "url": "basic/git/index.html",
    "revision": "8c981a5e5968cae7fb7639f56d230a43"
  },
  {
    "url": "basic/network/index.html",
    "revision": "c1f9093f841c2de2fa7bfe0b8983be75"
  },
  {
    "url": "basic/network/JavaScript基础知识.html",
    "revision": "68f2a90a9dcec0f13a23bda4125875ca"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "a74bfa52deae5713e2b2995dd478af39"
  },
  {
    "url": "frontend/css/P129-P161.html",
    "revision": "8ee4b87064ac8c3f1264b6323ab90bf5"
  },
  {
    "url": "frontend/css/P165-P188.html",
    "revision": "b2e368a04b5cbecad6d9ea077e37c381"
  },
  {
    "url": "frontend/css/P222-P250.html",
    "revision": "10c897c975a596cb76fa3a84c84cc366"
  },
  {
    "url": "frontend/css/P275-.html",
    "revision": "92bfb02b5f8f444fd975d48fe6c84d38"
  },
  {
    "url": "frontend/html/index.html",
    "revision": "71de97352a4a08999eee61c144869079"
  },
  {
    "url": "frontend/js/'this'的指向.html",
    "revision": "56f55824288f0ee61379a40f0bba4773"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "a679b2be9906011bf9f01fe67cc8e77f"
  },
  {
    "url": "frontend/js/JS习题册.html",
    "revision": "542f74f0a921081a07494da26b2b6088"
  },
  {
    "url": "frontend/js/JS习题册答案.html",
    "revision": "68e3744ba4db2e89cb5044239797be37"
  },
  {
    "url": "frontend/js/防抖、节流和RAF.html",
    "revision": "2c371d294ebc630981ee2259d97bd7d2"
  },
  {
    "url": "guide/index.html",
    "revision": "7e9a5f7e60e14778e063bbbc7da9d110"
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
    "revision": "01e3c3d8f01e2acd2bf68000632761df"
  },
  {
    "url": "other/philosophy/index.html",
    "revision": "54b2b220affaf35fcb306ef2180a409e"
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
