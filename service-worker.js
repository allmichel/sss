if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise(async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()})),i.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},i=(i,c)=>{Promise.all(i.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(i)};self.define=(i,r,d)=>{c[i]||(c[i]=Promise.resolve().then(()=>{let c={};const f={uri:location.origin+i.slice(1)};return Promise.all(r.map(i=>{switch(i){case"exports":return c;case"module":return f;default:return e(i)}})).then(e=>{const i=d(...e);return c.default||(c.default=i),c})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0.8950865d3141b016728b.bundle.js",revision:"7e6f46aca384c4b2593c0f04c2aba982"},{url:"5.af1056a31c4750aab62e.bundle.js",revision:"b94918427e434c53db79ca255373c5ee"},{url:"favicon.ico",revision:"4ff338a0cf47ad664a89ed3e900f17a5"},{url:"img/47d5e02832a083558ddd7c5ef8baae02.svg",revision:"1364c01051f21b1d83b7d018d8c44ccb"},{url:"img/96860fdd2f001e8edad5e0bdc5f71b7c.png",revision:"386a62f05bc173ef503483ec29bfdca8"},{url:"img/9e589c8265f399fca2e50b0220cb8c21.svg",revision:"786d89b5e65cca29ceefa320c415aa16"},{url:"img/b82e870a12a8cbabd701bc6ef708cce5.svg",revision:"d8df5272dd47d8ecf390a6ef1a5a8aa7"},{url:"img/fa8f33d6d6e3997f9256f58e31a3b85b.svg",revision:"1a28f2a529887ea4b254be5f1e90b510"},{url:"img/github.svg",revision:"23fc8f81f92bb2981d8f9e089d7df14a"},{url:"img/like.svg",revision:"335eff6a0aefd9ce25d8624c9cae2f54"},{url:"img/logo.svg",revision:"f2d616b08f2bfbc2abf0c7e863299d0c"},{url:"img/touch/apple-touch-icon.png",revision:"44ca16b883ef85158697590679f370e5"},{url:"img/touch/chrome-touch-icon-192x192.png",revision:"543fb00b8ce5e7db030aec69285746c2"},{url:"img/touch/icon-128x128.png",revision:"8d79e83d57ab1745548eb2df1dfca230"},{url:"img/touch/icon-512x512.png",revision:"99821271d5e3c4bd0e4b1d54b5fc15b1"},{url:"img/touch/ms-touch-icon-144x144-precomposed.png",revision:"d2b7a871b393151d112f6ce6fabebd0f"},{url:"index.d72c6eb8b4f78b5521f3.js",revision:"4f849b833d4846b3997061ccf0478e65"},{url:"index.html",revision:"e0653fe20e682b78d7afb4c4fba763ac"},{url:"shared.50db1b30f50f55930089.js",revision:"f0529449bdced778dd2ae1673f5a40bf"},{url:"site.webmanifest",revision:"0ad70d751b4df7653048141670eddda6"},{url:"vendors~index.5c61ee3712a4c1cfa22b.bundle.js",revision:"afab6014f3e2b8f1154aca6a9fd68738"},{url:"vendors~index~shared.94c4bfb191ee4ef2f60a.bundle.js",revision:"414883f933b8cd2756aae8ee48e5cae2"}],{})}));
