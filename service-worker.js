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
    "revision": "4b0c45cf69e312ffacae8e0a3bab11df"
  },
  {
    "url": "about/index.html",
    "revision": "05f58878ec0f6ed71fe7aeda5a4ee1a4"
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
    "url": "assets/js/13.9c50c814.js",
    "revision": "2f6ee32a540f43489823cee2585d80a4"
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
    "url": "assets/js/app.83f800ac.js",
    "revision": "b16840a62cc4ef9db1a8a80ef93a5e1d"
  },
  {
    "url": "basic/algorithm/index.html",
    "revision": "0100d0fee341a368304c1006dfd56899"
  },
  {
    "url": "basic/git/An annoying pitfall about Git.html",
    "revision": "7516214380875a22b86d6cf1cbc36a3c"
  },
  {
    "url": "basic/git/index.html",
    "revision": "a7ed2ec7b1914ab96bc47c54156d4900"
  },
  {
    "url": "basic/network/index.html",
    "revision": "a5a8e6e868953fb2f4ba05553cbd47b7"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "b5a2d5efccd57fbd550dd183d0135db8"
  },
  {
    "url": "frontend/css/P129-P161.html",
    "revision": "5d4f40a9ff615d9ded24b4120cc314f3"
  },
  {
    "url": "frontend/css/P165-P188.html",
    "revision": "0f3ac289537b486d8f1da03823e243f9"
  },
  {
    "url": "frontend/css/P222-P250.html",
    "revision": "7fde8830fb272e05ea5affab81bf3f9e"
  },
  {
    "url": "frontend/css/P275-.html",
    "revision": "0f8d62befe7cc5cd2f1fa0a6bb3a4ec4"
  },
  {
    "url": "frontend/html/index.html",
    "revision": "52270fd55012058a98a60f60115c99ae"
  },
  {
    "url": "frontend/js/'this'的指向.html",
    "revision": "1d0b651d0c2e630b0fd1d76df3274da4"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "3ddb5541a2acd101308f4c530e29e8df"
  },
  {
    "url": "frontend/js/JS习题册.html",
    "revision": "278a021ca06d68828e5fc1b727053f88"
  },
  {
    "url": "frontend/js/JS习题册答案.html",
    "revision": "34d98c8e5ac05969f606a77d3fac53e8"
  },
  {
    "url": "frontend/js/防抖、节流和RAF.html",
    "revision": "b780d093d81bd1076d9e4fe08e97b696"
  },
  {
    "url": "guide/index.html",
    "revision": "9a8db9ed1728f16ffb8b0b41c0d202cd"
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
    "revision": "9b566898dbb366e475e69674c9fbe686"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "7a8cf9850ee503212e56aec34136c09d"
  },
  {
    "url": "index.html",
    "revision": "4b2137419363f69f86ead4fb2171e92e"
  },
  {
    "url": "other/philosophy/index.html",
    "revision": "a92b756463b8dad7d441049c18d43803"
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
