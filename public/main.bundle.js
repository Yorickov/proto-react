(()=>{"use strict";var e={191:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"body{font-family:Arial,sans-serif;margin:8px;line-height:1.2}.app{max-width:500px}.header{margin-bottom:10px}.logo{display:block;width:96px;height:96px}.clock{padding:15px;border:1px solid #ddd;border-radius:6px;margin-bottom:10px}.value{display:inline-block;vertical-align:middle;margin-right:15px}.icon{display:inline-block;vertical-align:middle;width:15px;height:15px;border-radius:15px}.icon.day{background-color:#ef7b00}.icon.night{background-color:#2459a7}.lot{padding:15px;border:1px solid #ddd;border-radius:6px;margin-bottom:10px}.price{float:right;text-align:right;font-size:1.2rem}h1{margin:0 0 15px 0;line-height:1}p{margin:0}.loading{padding:15px;border-radius:6px;background:#eee;text-align:center}",""]);const o=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var r,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function a(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],i=0;i<e.length;i++){var c=e[i],s=n.base?c[0]+n.base:c[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var u=a(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:d,updater:g(p,n),references:1}),r.push(d)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function p(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function g(e,n){var t,r,i;if(n.singleton){var o=h++;t=f||(f=s(n)),r=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=s(n),r=p.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var s=c(e,n),l=0;l<t.length;l++){var d=a(t[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=s}}}},243:(e,n,t)=>{e.exports=t.p+"images/589113c9e24ff7e09634.png"}},n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(191);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var i=t(243);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s,l=function(e){var n,t;n=function(e){var n,t,r,o,a,c=document.createElement("div");return c.className="app",c.innerHTML=['\n  <header class="header">\n    '.concat('\n  <img class="logo" src='.concat(i,"></img>\n"),"\n  </header>\n"),(r={time:e.time},o=r.time,a=o.getHours()>=7&&o.getHours()<=21?"icon day":"icon night",'\n    <div class="clock">\n      <span class="value">\n        '.concat(o.toLocaleTimeString(),'\n      </span>\n      <span class="').concat(a,'"></span>\n    </div>\n  ')),(n={lots:e.lots},t=n.lots,null===t?'\n  <div class="loading">\n    Loading...\n  </div>\n':'\n    <div class="lots">\n      '.concat(t.map((function(e){return function(e){var n=e.lot;return'\n  <article class="lot">\n    <div class="price">'.concat(n.price,"</div>\n    <h1>").concat(n.name,"</h1>\n    <p>").concat(n.description,"</p>\n  </article>\n")}({lot:e})})).join(""),"\n    </div>\n  "))].join(""),c}(e),(t=document.getElementById("root")).innerHTML="",t.append(n)};s={time:new Date,lots:null},l(s),setInterval((function(){s=a(a({},s),{},{time:new Date}),l(s)}),1e3),function(e){switch(e){case"/lots":return new Promise((function(e){setTimeout((function(){e([{id:1,name:"Apple",description:"Apple description",price:16},{id:2,name:"Orange",description:"Orange description",price:41}])}),1e3)}));default:throw new Error("Unknown address")}}("/lots").then((function(e){s=a(a({},s),{},{lots:e}),l(s),setInterval((function(){s=a(a({},s),{},{lots:s.lots.map((function(e){return a(a({},e),{},{price:Math.round(10*Math.random()+30)})}))}),l(s)}),400)}))})()})();