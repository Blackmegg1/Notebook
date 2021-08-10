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
    "revision": "3d685c69167f997bd2d1d50dd195a3f0"
  },
  {
    "url": "about/index.html",
    "revision": "b4e6450f65324d402dffeaefa510cce7"
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
    "url": "assets/js/13.342296fc.js",
    "revision": "78a26a787e0777177ad2dc3fc362ecab"
  },
  {
    "url": "assets/js/14.2e1ea3da.js",
    "revision": "92dccab5df054bf215aa9f11914dc2c8"
  },
  {
    "url": "assets/js/15.54678d9d.js",
    "revision": "6c265293b12f6c11f6a6287d4854ec9f"
  },
  {
    "url": "assets/js/16.49ebdb34.js",
    "revision": "bb20fa016b196ce84646e49c6f6fab12"
  },
  {
    "url": "assets/js/17.75816653.js",
    "revision": "c76c61e1e16cc5cc779cdd51abbc7073"
  },
  {
    "url": "assets/js/18.9644b3fb.js",
    "revision": "9f64195bffbfd30e0bf4d55961a13c7e"
  },
  {
    "url": "assets/js/19.b7372154.js",
    "revision": "28d2f76f3bfa4e1ea69a4c54bfe78d10"
  },
  {
    "url": "assets/js/2.1aeebccc.js",
    "revision": "76045c02931513019e96b3809c1d1efa"
  },
  {
    "url": "assets/js/20.9e3aebe7.js",
    "revision": "c7dd9e41647ff48463fe51976a20ee01"
  },
  {
    "url": "assets/js/21.0fe18aac.js",
    "revision": "06d9e2dc6b580910abf96bde6411b611"
  },
  {
    "url": "assets/js/22.6f92c1d1.js",
    "revision": "2a6212e42eb04bd8a8204e7da0a019a5"
  },
  {
    "url": "assets/js/23.ab337582.js",
    "revision": "c11b18d5698f1b39441203ea5d990ed9"
  },
  {
    "url": "assets/js/24.a86cce46.js",
    "revision": "432d1973f5160c0bf779efd8f25982c8"
  },
  {
    "url": "assets/js/25.2bd78406.js",
    "revision": "75095cc467a2ac75b3bae5ea931568fc"
  },
  {
    "url": "assets/js/26.3effcb6f.js",
    "revision": "e2e77c54a20d73bb6ed0c6738a28e453"
  },
  {
    "url": "assets/js/27.7ebd6d11.js",
    "revision": "28b3080ce4b0f6a14dee50fa31aad162"
  },
  {
    "url": "assets/js/3.aa8f0b53.js",
    "revision": "4863a22e9dad507150c77ff2efb96ac5"
  },
  {
    "url": "assets/js/4.6958c45a.js",
    "revision": "395feea72d3bfb8d95bfbe866fbf8f1b"
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
    "url": "assets/js/app.bca9cfec.js",
    "revision": "f93d807bd26e04138fe2b73132ec4cf5"
  },
  {
    "url": "basic/algorithm/index.html",
    "revision": "a8c5bcd46bfbf7dad7b250de4fcf9dea"
  },
  {
    "url": "basic/git/An annoying pitfall about Git.html",
    "revision": "88fa768d5cb957f48c8706956d02aff5"
  },
  {
    "url": "basic/git/index.html",
    "revision": "7c662452aff7f4ccdc2988ead8f9656d"
  },
  {
    "url": "basic/network/index.html",
    "revision": "ab3c46a1b8de9a1b81174f9d414d5c71"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "bb108284346889e13df41eef82fbb0bf"
  },
  {
    "url": "frontend/css/P129-P161.html",
    "revision": "ed4065e9ed85fe35997cdaac124b693c"
  },
  {
    "url": "frontend/css/P165-P188.html",
    "revision": "1159db41aa7a367ace7ff04c92fc3aa4"
  },
  {
    "url": "frontend/css/P222-P250.html",
    "revision": "bb96369a96bb372b42c5760ed2d9b802"
  },
  {
    "url": "frontend/css/P275-.html",
    "revision": "118d8dd52a4c41a014e4f445cf684579"
  },
  {
    "url": "frontend/html/index.html",
    "revision": "d31e4d13ae2a44d06d18beefd253aedb"
  },
  {
    "url": "frontend/js/'this'的指向.html",
    "revision": "6e1ee6165baa74ffb717f983ecb56e25"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "afa8f80ae93589de89fa0f30124abbb1"
  },
  {
    "url": "frontend/js/JS习题册.html",
    "revision": "41395bfb09fb29bdfb241fc5d3e7c592"
  },
  {
    "url": "frontend/js/JS习题册答案.html",
    "revision": "ea9e14458eb2df2ec667cf148bd13495"
  },
  {
    "url": "frontend/js/防抖、节流和RAF.html",
    "revision": "5609f69a05ba013ed8fa07697a97b5de"
  },
  {
    "url": "guide/index.html",
    "revision": "011b9ec56b879914746c98554578f608"
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
    "revision": "8d158093381fc403f6e0d6660cb17a99"
  },
  {
    "url": "other/philosophy/index.html",
    "revision": "809a1d5830c8772d8ed631b54e271424"
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
