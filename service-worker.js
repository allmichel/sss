if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise(async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()})),i.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},i=(i,c)=>{Promise.all(i.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(i)};self.define=(i,d,r)=>{c[i]||(c[i]=Promise.resolve().then(()=>{let c={};const f={uri:location.origin+i.slice(1)};return Promise.all(d.map(i=>{switch(i){case"exports":return c;case"module":return f;default:return e(i)}})).then(e=>{const i=r(...e);return c.default||(c.default=i),c})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0.767bd89cc1a4ad1558ac.bundle.js",revision:"37fee2c2e44267d6a5cd8b0ced866794"},{url:"5.74455a58b1911e051deb.bundle.js",revision:"9ec1fbea1b1d7c2c8bf79db9ee234481"},{url:"apple-touch-icon.png",revision:"4b5a4f3a4ce0968ef98b48ceb21828f9"},{url:"browserconfig.xml",revision:"f422643f69978430a467930f63d7a941"},{url:"favicon.ico",revision:"b8499a3d28c9b11a7b5aaaf70003adf1"},{url:"img/47d5e02832a083558ddd7c5ef8baae02.svg",revision:"1364c01051f21b1d83b7d018d8c44ccb"},{url:"img/96860fdd2f001e8edad5e0bdc5f71b7c.png",revision:"386a62f05bc173ef503483ec29bfdca8"},{url:"img/9e589c8265f399fca2e50b0220cb8c21.svg",revision:"786d89b5e65cca29ceefa320c415aa16"},{url:"img/b82e870a12a8cbabd701bc6ef708cce5.svg",revision:"d8df5272dd47d8ecf390a6ef1a5a8aa7"},{url:"img/fa8f33d6d6e3997f9256f58e31a3b85b.svg",revision:"1a28f2a529887ea4b254be5f1e90b510"},{url:"img/github.svg",revision:"23fc8f81f92bb2981d8f9e089d7df14a"},{url:"img/like.svg",revision:"335eff6a0aefd9ce25d8624c9cae2f54"},{url:"img/logo.svg",revision:"1c62d5e1a9782ca0891117e1b46be44f"},{url:"img/tiles/large.png",revision:"4fa9884a84f347a1e4d7ef94d81fbb8c"},{url:"img/tiles/medium.png",revision:"89b898e90d8b3976ff5c3028d5626f4a"},{url:"img/tiles/small.png",revision:"3527bfe7a2ec1464e2fa83ccbc17a73f"},{url:"img/tiles/wide.png",revision:"3f8e3b9c4099f3a030e79eac741c9818"},{url:"img/touch/chrome-touch-icon-192x192.png",revision:"09e2bcdec5002f356327361c55bee4c3"},{url:"img/touch/icon-128x128 2.png",revision:"8d79e83d57ab1745548eb2df1dfca230"},{url:"img/touch/icon-128x128.png",revision:"0a0256a8009590c91c60fd628aafd2cf"},{url:"img/touch/icon-144x144.png",revision:"a5f0a9b4f16edf84dc3e66c06a7d7f22"},{url:"img/touch/icon-512x512.png",revision:"52090f8f62b770165f1bdc431b2adc5b"},{url:"index.df222006c285bc137b53.css",revision:"e4b3110f6f49fdc0d47962d96f8fadbc"},{url:"index.f6edf51a97920ed0d244.js",revision:"e28e0a553bed7218b75ac668f1091e6c"},{url:"index.html",revision:"881e32eac9fe25c4c28461e294d0e967"},{url:"shared.6b495fa3c0867ba654c7.js",revision:"f0529449bdced778dd2ae1673f5a40bf"},{url:"site.webmanifest",revision:"fb46bfc75f7cf370ad417ef77d758da7"},{url:"vendors~index.01ff56229657b5dd75d7.bundle.js",revision:"79317c36a746bf4799c7b50d63935569"},{url:"vendors~index.9cd8424fc298dd8c11a6.css",revision:"ef42e471807d9a7208be654d7bc151bd"},{url:"vendors~index~shared.ba14f43957105392ff13.bundle.js",revision:"e870790b8083536489dce95fb9f4bb55"}],{})}));
