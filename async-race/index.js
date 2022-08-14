(()=>{"use strict";var n={424:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(645),a=t.n(r),i=t(667),s=t.n(i),o=t(301),c=a()((function(n){return n[1]})),d=s()(o.Z);c.push([n.id,"* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 20px;\r\n    color: #fff;\r\n    background: #000;\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n    font-size: 24px;\r\n} \r\n\r\n.button,\r\ninput[type=button] {\r\n    height: 30px;\r\n    width: 100px;\r\n    cursor: pointer;\r\n    padding: 5px 5px;\r\n    background: linear-gradient(#fab617, #cc780a) #8b5c1d;\r\n    transition: 0.3s;\r\n    font-size: 16px;\r\n}\r\n\r\n.button:hover, \r\ninput[type=button]:hover { \r\n    background: linear-gradient(#fcc036, #fc940c) #b47523;\r\n};\r\n\r\n.button:active, \r\ninput[type=button]:active { \r\n    background: linear-gradient(#fcc036, #fc940c) #b47523;\r\n}\r\n\r\n.garage-view {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n  \r\n.car-controls {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n  \r\n.name-input,\r\n.update-name-input {\r\n    height: 30px;\r\n    width: 200px;\r\n}\r\n \r\n.car-creation-form,\r\n.car-update-form {\r\n    display: flex;\r\n    column-gap: 10px;\r\n}\r\n\r\n.color-input,\r\n.update-color-input {\r\n    height: 30px;\r\n    width: 50px;\r\n    cursor: pointer;\r\n}\r\n  \r\n.garage-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 10px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.garage {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.car-controls {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    column-gap: 10px;\r\n}\r\n\r\n.car-name {\r\n    margin-left: 30px;\r\n}\r\n\r\n.track {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    border-bottom: 2px #ffffff dashed;\r\n}\r\n\r\n.button-start-engine,\r\n.button-stop-engine {\r\n    height: 20px;\r\n    width: 30px;\r\n    background: linear-gradient(#fab617, #cc780a) #8b5c1d;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n}\r\n\r\n.button-start-engine:hover,\r\n.button-stop-engine:hover {\r\n    background: linear-gradient(#fcc036, #fc940c) #b47523;\r\n}\r\n\r\n.button-start-engine:active,\r\n.button-stop-engine:active {\r\n    background: linear-gradient(#fcc036, #fc940c) #b47523;\r\n}   \r\n\r\n.car-img {\r\n    display: inline-block;\r\n    margin-left: 5px;\r\n}\r\n\r\n.garage svg {\r\n    position: relative;\r\n    top: 10px;\r\n    width: 100px;\r\n    height: 50px;\r\n}\r\n\r\n.finish {\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-right: 180px;\r\n    background-image: url("+d+");\r\n    background-position: center;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.winners-controls, \r\n.winners-view,\r\n.winners-container,\r\n.score {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.score-heading,\r\n.winner {\r\n    display: flex;\r\n}\r\n\r\n.score-heading span,\r\n.winner span {\r\n    width: 150px;\r\n    text-align: center;\r\n}\r\n\r\n.sort-and-order {\r\n    display: flex;\r\n    height: 30px;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}",""]);const l=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var o=0;o<n.length;o++){var c=[].concat(n[o]);r&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},301:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/img/finish.png"},379:(n,e,t)=>{var r,a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function s(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function o(n,e){for(var t={},r=[],a=0;a<n.length;a++){var o=n[a],c=e.base?o[0]+e.base:o[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var p=s(l),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:l,updater:v(u,e),references:1}),r.push(l)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var s=a(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function p(n,e,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,a);else{var i=document.createTextNode(a),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function u(n,e,t){var r=t.css,a=t.media,i=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,g=0;function v(n,e){var t,r,a;if(e.singleton){var i=g++;t=h||(h=c(e)),r=p.bind(null,t,i,!1),a=p.bind(null,t,i,!0)}else t=c(e),r=u.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=o(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var a=s(t[r]);i[a].references--}for(var c=o(n,e),d=0;d<t.length;d++){var l=s(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=c}}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),r=t(424);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const a=new class{constructor(){this.render=()=>{const n=document.createElement("div");n.classList.add("nav-view"),n.innerHTML='\n      <button class="button-garage button">To garage</button>\n      <button class="button-winners button">To winners</button>\n    ',document.body.appendChild(n)}}},i=new class{constructor(){this.render=()=>{const n=document.createElement("div");n.classList.add("garage-view"),document.body.appendChild(n);const e=this.renderCarControls();n.appendChild(e)},this.renderCarControls=()=>{const n=document.createElement("div");return n.classList.add("car-controls"),n.innerHTML='\n      <div>\n      <form class="car-creation-form">\n          <input class="name-input" type="text" placeholder="Enter car name.">\n          <input class="color-input" type="color" value="#ffffff">\n          <input class="button-create-car button" type="button" value="Create">\n      </form>\n      <form class="car-update-form">\n          <input class="update-name-input" type="text">\n          <input class="update-color-input" type="color" value="#ffffff">\n          <input class="button-update-car button" type="button" value="Update">\n      </form>\n      </div>\n      <div>\n        <button class="button-race button">Race</button>\n        <button class="button-reset button">Reset</button>\n        <button class="button-generate-cars button">Generate cars</button>\n      </div>\n    ',n},this.renderGarage=(n,e,t)=>{const r=document.createElement("div");r.classList.add("garage-container"),r.innerHTML=`\n      <span class="cars-count">Garage (${e})</span>\n      <span class="cars-page">Page ${t}</span>\n      <div class="garage">\n          ${n.map((n=>`\n          <div class='car-${n.id}'>\n          ${this.renderCar(n)}\n          </div>`)).join("")}\n      </div>\n      <div class="garage-pagination-buttons">\n          <button class="button garage-prev-button">Prev</button>\n          <button class="button garage-next-button">Next</button>\n      </div>\n    `,document.querySelector(".garage-view").appendChild(r)},this.renderCar=n=>`\n      <div class="car-controls">\n        <button class="button button-select-car" data-id="${n.id}">Select</button>\n        <button class="button button-remove-car" data-id="${n.id}">Remove</button>\n        <span class="car-name">${n.name}</span>\n      </div>\n      <div class="track">\n        <div>\n          <button class="button-start-engine" data-id="${n.id}">A</button>\n          <button class="button-stop-engine" data-id="${n.id}">B</button>\n          <div class="car-img car-img-${n.id}">${this.renderCarImg(n.color)}</div> \n        </div>\n        <div class="finish"></div>\n      </div>\n    `,this.renderCarImg=n=>`\n    <?xml version="1.0" standalone="no"?>\n  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"\n  "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">\n  <svg width="150" height="56" version="1.0" xmlns="http://www.w3.org/2000/svg"\n  width="1280.000000pt" height="1" viewBox="0 0 1280 1"\n  preserveAspectRatio="xMidYMid meet">\n  <metadata>\n  Created by potrace 1.15, written by Peter Selinger 2001-2017\n  </metadata>\n  <g transform="translate(0,336) scale(0.1,-0.1)"\n  fill="${n}" stroke="#ffffff" stroke-width="50">\n  <path d="M3525 5341 c-72 -18 -79 -28 -90 -121 -4 -30 -11 -62 -16 -71 -4 -9\n  -97 -51 -206 -94 -774 -304 -1348 -540 -1603 -661 -163 -77 -222 -91 -421\n  -104 -85 -5 -170 -14 -189 -20 -101 -32 -362 -58 -620 -63 l-115 -2 -47 -80\n  c-47 -78 -47 -80 -29 -100 34 -36 35 -77 5 -177 -30 -99 -34 -178 -19 -370 5\n  -67 4 -88 -6 -88 -29 0 -83 -56 -110 -114 -50 -106 -74 -343 -48 -467 13 -58\n  13 -62 3 -159 -5 -54 16 -238 28 -244 2 -1 29 -20 61 -41 73 -49 123 -103 132\n  -143 17 -79 167 -155 355 -181 104 -15 969 -97 1087 -104 l32 -2 5 160 c7 230\n  50 394 146 559 281 479 917 673 1405 429 316 -159 530 -424 598 -742 22 -106\n  29 -365 13 -519 l-8 -82 3002 0 c2855 0 3002 1 2995 18 -33 87 -56 325 -45\n  461 28 320 177 567 459 759 399 273 847 282 1243 24 239 -157 397 -392 460\n  -687 18 -84 15 -341 -5 -430 -8 -38 -14 -71 -12 -73 7 -8 386 20 478 34 180\n  28 253 65 304 152 24 41 28 57 28 127 -1 44 -9 117 -20 163 -18 79 -18 88 -2\n  190 31 199 40 306 41 497 1 176 -1 195 -23 260 -46 135 -103 190 -283 274\n  -222 104 -633 220 -1168 330 -523 108 -1524 210 -2054 211 l-229 0 -236 139\n  c-813 477 -1593 884 -1852 966 -498 157 -1598 195 -2892 100 l-188 -14 -47 30\n  c-92 58 -223 89 -297 70z m1912 -311 c13 -45 58 -305 88 -515 33 -226 74 -539\n  71 -542 -7 -7 -1672 40 -2054 58 -357 16 -464 56 -573 215 -62 91 -87 225 -59\n  326 12 40 56 74 192 148 369 198 799 289 1618 340 246 15 290 16 510 16 l194\n  -1 13 -45z m649 10 c383 -36 717 -86 934 -139 210 -52 451 -163 720 -332 141\n  -88 379 -259 380 -271 0 -5 -14 -8 -32 -8 -48 0 -114 -37 -140 -78 -24 -39\n  -30 -113 -15 -189 l9 -43 -904 0 -904 0 -176 540 -175 540 47 0 c25 0 141 -9\n  256 -20z"/>\n  <path d="M2617 3125 c-431 -82 -774 -440 -838 -875 -17 -117 -7 -292 24 -410\n  113 -436 497 -751 947 -777 507 -29 959 313 1076 813 28 117 26 348 -4 467\n  -94 378 -383 670 -760 768 -105 27 -336 34 -445 14z m378 -310 c84 -21 209\n  -85 280 -142 116 -94 210 -242 251 -393 23 -87 24 -260 0 -355 -58 -237 -242\n  -439 -473 -519 -531 -186 -1074 277 -969 828 30 152 94 274 206 386 111 110\n  237 178 385 206 84 16 235 11 320 -11z"/>\n  <path d="M2918 2568 c2 -90 7 -167 12 -172 17 -17 108 58 201 166 l51 57 -48\n  31 c-52 33 -131 65 -185 75 l-34 6 3 -163z"/>\n  <path d="M2591 2700 c-62 -22 -167 -82 -164 -94 3 -13 237 -216 249 -216 7 0\n  15 7 18 16 8 20 8 127 -1 232 -7 95 -8 96 -102 62z"/>\n  <path d="M3209 2355 c-57 -64 -105 -123 -107 -131 -6 -25 46 -35 157 -29 58 3\n  121 8 139 11 33 5 34 6 27 42 -7 44 -64 167 -92 201 l-19 24 -105 -118z"/>\n  <path d="M2260 2409 c-31 -44 -68 -133 -77 -186 l-6 -33 155 0 c165 0 201 9\n  181 44 -13 24 -204 216 -214 216 -5 0 -22 -18 -39 -41z"/>\n  <path d="M2786 2354 c-36 -35 0 -87 44 -64 26 14 26 56 1 70 -25 13 -27 13\n  -45 -6z"/>\n  <path d="M2751 2186 c-57 -32 -68 -111 -22 -157 43 -42 101 -43 143 -1 42 42\n  41 100 -1 143 -33 32 -78 38 -120 15z"/>\n  <path d="M2560 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20\n  -54 2z"/>\n  <path d="M3002 2124 c-27 -19 -28 -36 -3 -58 25 -23 61 -6 61 29 0 33 -30 49\n  -58 29z"/>\n  <path d="M2245 1993 c-77 -6 -76 -5 -59 -65 16 -55 61 -146 92 -186 l18 -23\n  103 122 c57 67 104 129 105 138 1 14 -14 16 -104 17 -58 0 -127 -1 -155 -3z"/>\n  <path d="M3165 1981 c-44 -4 -61 -10 -63 -22 -3 -16 210 -229 228 -229 22 0\n  86 141 105 228 l7 32 -109 -2 c-59 -1 -135 -4 -168 -7z"/>\n  <path d="M2776 1914 c-19 -18 -19 -20 -6 -45 6 -11 21 -19 35 -19 20 0 45 24\n  45 44 0 10 -32 36 -45 36 -7 0 -21 -7 -29 -16z"/>\n  <path d="M2589 1743 c-86 -90 -139 -151 -139 -162 0 -25 179 -101 236 -101\n  l27 0 -7 143 c-9 166 -13 187 -35 187 -9 0 -46 -30 -82 -67z"/>\n  <path d="M2936 1801 c-6 -10 -24 -168 -29 -258 -3 -60 -2 -63 19 -63 79 0 262\n  68 248 92 -5 7 -53 64 -108 126 -93 105 -117 124 -130 103z"/>\n  <path d="M10723 3125 c-318 -58 -597 -266 -743 -555 -223 -441 -98 -996 289\n  -1288 112 -84 188 -125 311 -166 274 -91 545 -70 802 61 552 282 735 983 392\n  1500 -225 339 -651 521 -1051 448z m385 -315 c348 -98 579 -443 532 -796 -67\n  -508 -596 -796 -1055 -574 -239 116 -396 352 -412 620 -20 335 192 640 516\n  745 122 40 289 42 419 5z"/>\n  <path d="M11017 2568 c3 -90 9 -167 14 -172 13 -14 53 18 155 122 l95 97 -23\n  18 c-50 40 -189 97 -235 97 -10 0 -11 -33 -6 -162z"/>\n  <path d="M10705 2706 c-50 -16 -133 -58 -163 -82 l-23 -19 121 -107 c67 -60\n  128 -108 135 -108 23 0 27 39 20 186 -8 162 -4 157 -90 130z"/>\n  <path d="M11307 2354 c-59 -65 -107 -126 -107 -136 0 -11 11 -18 38 -22 44 -7\n  278 7 289 17 15 16 -51 183 -94 236 l-19 24 -107 -119z"/>\n  <path d="M10362 2413 c-39 -62 -70 -134 -78 -184 l-7 -39 152 0 c86 0 161 5\n  172 10 17 10 18 13 5 38 -8 15 -59 71 -114 125 l-99 99 -31 -49z"/>\n  <path d="M10888 2359 c-24 -14 -23 -56 2 -69 44 -23 80 29 44 64 -18 19 -23\n  19 -46 5z"/>\n  <path d="M10851 2187 c-49 -29 -66 -101 -35 -146 9 -13 32 -29 50 -37 29 -12\n  39 -12 68 0 99 41 85 180 -19 192 -24 3 -50 -1 -64 -9z"/>\n  <path d="M10660 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20\n  -54 2z"/>\n  <path d="M11096 2124 c-9 -8 -16 -22 -16 -29 0 -13 26 -45 36 -45 20 0 44 25\n  44 45 0 14 -8 29 -19 35 -25 13 -27 13 -45 -6z"/>\n  <path d="M10335 1991 c-60 -6 -60 -6 -57 -36 9 -69 104 -248 122 -229 57 61\n  210 250 207 258 -4 12 -176 17 -272 7z"/>\n  <path d="M11267 1983 c-68 -5 -79 -19 -47 -60 23 -31 200 -193 210 -193 3 0\n  20 24 37 53 29 48 52 111 67 180 l6 27 -107 -2 c-60 -1 -134 -3 -166 -5z"/>\n  <path d="M10870 1910 c-16 -31 4 -62 38 -58 21 2 28 9 30 32 5 45 -47 65 -68\n  26z"/>\n  <path d="M10651 1703 c-56 -59 -101 -113 -101 -120 0 -28 172 -103 237 -103\n  l26 0 -7 123 c-10 179 -15 207 -36 207 -10 0 -63 -48 -119 -107z"/>\n  <path d="M11035 1801 c-7 -12 -23 -144 -29 -243 -4 -77 -4 -78 19 -78 45 0\n  130 22 193 51 l64 29 -19 23 c-65 82 -198 227 -209 227 -7 0 -15 -4 -19 -9z"/>\n  </g>\n  </svg>\n  `}};var s=function(n,e,t,r){return new(t||(t=Promise))((function(a,i){function s(n){try{c(r.next(n))}catch(n){i(n)}}function o(n){try{c(r.throw(n))}catch(n){i(n)}}function c(n){var e;n.done?a(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(s,o)}c((r=r.apply(n,e||[])).next())}))};const o=new class{constructor(){this.baseURL="http://127.0.0.1:3000",this.garage=`${this.baseURL}/garage`,this.winners=`${this.baseURL}/winners`,this.engine=`${this.baseURL}/engine`,this.getCars=(n,e=7)=>s(this,void 0,void 0,(function*(){const t=yield fetch(`${this.garage}?_page=${n}&_limit=${e}`);return{cars:yield t.json(),carsCount:t.headers.get("X-Total-Count")}})),this.getCar=n=>s(this,void 0,void 0,(function*(){return(yield fetch(`${this.garage}/${n}`)).json()})),this.createCar=n=>s(this,void 0,void 0,(function*(){return(yield fetch(this.garage,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})).json()})),this.deleteCar=n=>s(this,void 0,void 0,(function*(){return(yield fetch(`${this.garage}/${n}`,{method:"DELETE"})).json()})),this.updateCar=(n,e)=>s(this,void 0,void 0,(function*(){return(yield fetch(`${this.garage}/${n}`,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json()})),this.startEngine=n=>s(this,void 0,void 0,(function*(){return(yield fetch(`${this.engine}?id=${n}&status=started`)).json()})),this.stopEngine=n=>s(this,void 0,void 0,(function*(){return(yield fetch(`${this.engine}?id=${n}&status=stopped`)).json()})),this.driveCar=n=>s(this,void 0,void 0,(function*(){const e=yield fetch(`${this.engine}?id=${n}&status=drive`).catch();return 200!==e.status?{success:!1}:Object.assign({},yield e.json())})),this.getSortAndOrder=(n,e)=>n&&e?`&_sort=${n}&_order=${e}`:"",this.getWinners=(n,e,t,r=10)=>s(this,void 0,void 0,(function*(){const a=yield fetch(`${this.winners}?_page=${n}&_limit=${r}${this.getSortAndOrder(e,t)}`),i=yield a.json();return{winners:yield Promise.all(i.map((n=>s(this,void 0,void 0,(function*(){return Object.assign(Object.assign({},n),{car:yield this.getCar(n.id)})}))))),winnersCount:a.headers.get("X-Total-Count")}})),this.createWinner=n=>s(this,void 0,void 0,(function*(){return(yield fetch(this.winners,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})).json()})),this.updateWinner=(n,e)=>s(this,void 0,void 0,(function*(){return(yield fetch(`${this.winners}/${n}`,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json()})),this.getWinner=n=>s(this,void 0,void 0,(function*(){return(yield fetch(`${this.winners}/${n}`)).json()})),this.getWinnerStatus=n=>s(this,void 0,void 0,(function*(){return(yield fetch(`${this.winners}/${n}`)).status})),this.deleteWinner=n=>s(this,void 0,void 0,(function*(){return(yield fetch(`${this.winners}/${n}`,{method:"DELETE"})).json()})),this.updateWinnersScore=({id:n,time:e})=>s(this,void 0,void 0,(function*(){if(404===(yield this.getWinnerStatus(n)))yield this.createWinner({id:n,wins:1,time:e});else{const t=yield this.getWinner(n);yield this.updateWinner(n,{id:n,wins:t.wins+1,time:e<t.time?e:t.time})}})),this.carsCount=0,this.winnersCount=0,this.garagePage=1,this.winnersPage=1,this.selectedCarId=null,this.sort="id",this.order="asc"}setSortAndOrder(){this.sort=document.querySelector(".sort").value,this.order=document.querySelector(".order").value}getRandomCar(){const n=["Tesla","Mercedes","BMW","Toyota","Lada","Opel","Aston Martin","Lotus","Cherry","Renault","Peugeot"],e=`${n[Math.ceil(Math.random()*n.length)]} ${["Kalina","Granta","Model S","GLX","GLK","Passat","Golf","Logan","911","Zafira","Camry","Amulet"][Math.floor(Math.random()*n.length)]}`,t="0123456789ABCDEF";let r="#";for(let n=0;n<6;n+=1)r+=t[Math.floor(Math.random()*t.length)];return{name:e,color:r}}},c=new class{constructor(){this.render=(n,e)=>{const t=document.createElement("div");t.classList.add("winners-view"),t.classList.add("hidden"),document.body.appendChild(t);const r=this.renderWinnersControls(n,e);t.appendChild(r)},this.renderWinnersControls=(n,e)=>{const t=document.createElement("div");return t.classList.add("winners-controls"),t.innerHTML=`\n      <span class="winners-count">Winners (${e})</span>\n      <span class="winners-page">Page ${n}</span>\n      <div class="sort-and-order">\n        <select class="sort">\n          <option selected value="id">Sort by id</option>\n          <option value="wins">Sort by wins</option>\n          <option value="time">Sort by time</option>\n        </select>\n        <select class="order">\n          <option elected value="asc">in asc order</option>\n          <option value="desc">in desc order</option>\n        </select>\n      </div>\n    `,t},this.renderWinnersContainer=n=>{const e=document.createElement("div");e.classList.add("winners-container"),e.innerHTML=`\n      <div class="score">\n        <div class="score-heading">\n          <span>№</span>\n          <span>Car</span>\n          <span>Name</span>\n          <span>Wins</span>\n          <span>Best time</span>\n        </div class="winners">\n        ${n.map((n=>`\n        <div class='winner winner-${n.id}'>\n        ${this.renderWinner(n)}\n        </div>`)).join("")}\n        </div>\n      <div class="winners-pagination-buttons">\n      <button class="button winners-prev-button">Prev</button>\n      <button class="button winners-next-button">Next</button>\n  </div>\n    `,document.querySelector(".winners-view").appendChild(e)},this.renderWinner=n=>`\n      <span>${n.id}</span>\n      <span class="winner-image winner-image-${n.id}">${this.renderWinnerImg(n.car.color)}</span>\n      <span>${n.car.name}</span>\n      <span>${n.wins}</span>\n      <span>${n.time}</span>\n    `,this.renderWinnerImg=n=>`\n    <?xml version="1.0" standalone="no"?>\n  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"\n  "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">\n  <svg width="50" height="25" version="1.0" xmlns="http://www.w3.org/2000/svg"\n  width="1280.000000pt" height="1" viewBox="0 0 1280 1"\n  preserveAspectRatio="xMidYMid meet">\n  <metadata>\n  Created by potrace 1.15, written by Peter Selinger 2001-2017\n  </metadata>\n  <g transform="translate(0,336) scale(0.1,-0.1)"\n  fill="${n}" stroke="#ffffff" stroke-width="50">\n  <path d="M3525 5341 c-72 -18 -79 -28 -90 -121 -4 -30 -11 -62 -16 -71 -4 -9\n  -97 -51 -206 -94 -774 -304 -1348 -540 -1603 -661 -163 -77 -222 -91 -421\n  -104 -85 -5 -170 -14 -189 -20 -101 -32 -362 -58 -620 -63 l-115 -2 -47 -80\n  c-47 -78 -47 -80 -29 -100 34 -36 35 -77 5 -177 -30 -99 -34 -178 -19 -370 5\n  -67 4 -88 -6 -88 -29 0 -83 -56 -110 -114 -50 -106 -74 -343 -48 -467 13 -58\n  13 -62 3 -159 -5 -54 16 -238 28 -244 2 -1 29 -20 61 -41 73 -49 123 -103 132\n  -143 17 -79 167 -155 355 -181 104 -15 969 -97 1087 -104 l32 -2 5 160 c7 230\n  50 394 146 559 281 479 917 673 1405 429 316 -159 530 -424 598 -742 22 -106\n  29 -365 13 -519 l-8 -82 3002 0 c2855 0 3002 1 2995 18 -33 87 -56 325 -45\n  461 28 320 177 567 459 759 399 273 847 282 1243 24 239 -157 397 -392 460\n  -687 18 -84 15 -341 -5 -430 -8 -38 -14 -71 -12 -73 7 -8 386 20 478 34 180\n  28 253 65 304 152 24 41 28 57 28 127 -1 44 -9 117 -20 163 -18 79 -18 88 -2\n  190 31 199 40 306 41 497 1 176 -1 195 -23 260 -46 135 -103 190 -283 274\n  -222 104 -633 220 -1168 330 -523 108 -1524 210 -2054 211 l-229 0 -236 139\n  c-813 477 -1593 884 -1852 966 -498 157 -1598 195 -2892 100 l-188 -14 -47 30\n  c-92 58 -223 89 -297 70z m1912 -311 c13 -45 58 -305 88 -515 33 -226 74 -539\n  71 -542 -7 -7 -1672 40 -2054 58 -357 16 -464 56 -573 215 -62 91 -87 225 -59\n  326 12 40 56 74 192 148 369 198 799 289 1618 340 246 15 290 16 510 16 l194\n  -1 13 -45z m649 10 c383 -36 717 -86 934 -139 210 -52 451 -163 720 -332 141\n  -88 379 -259 380 -271 0 -5 -14 -8 -32 -8 -48 0 -114 -37 -140 -78 -24 -39\n  -30 -113 -15 -189 l9 -43 -904 0 -904 0 -176 540 -175 540 47 0 c25 0 141 -9\n  256 -20z"/>\n  <path d="M2617 3125 c-431 -82 -774 -440 -838 -875 -17 -117 -7 -292 24 -410\n  113 -436 497 -751 947 -777 507 -29 959 313 1076 813 28 117 26 348 -4 467\n  -94 378 -383 670 -760 768 -105 27 -336 34 -445 14z m378 -310 c84 -21 209\n  -85 280 -142 116 -94 210 -242 251 -393 23 -87 24 -260 0 -355 -58 -237 -242\n  -439 -473 -519 -531 -186 -1074 277 -969 828 30 152 94 274 206 386 111 110\n  237 178 385 206 84 16 235 11 320 -11z"/>\n  <path d="M2918 2568 c2 -90 7 -167 12 -172 17 -17 108 58 201 166 l51 57 -48\n  31 c-52 33 -131 65 -185 75 l-34 6 3 -163z"/>\n  <path d="M2591 2700 c-62 -22 -167 -82 -164 -94 3 -13 237 -216 249 -216 7 0\n  15 7 18 16 8 20 8 127 -1 232 -7 95 -8 96 -102 62z"/>\n  <path d="M3209 2355 c-57 -64 -105 -123 -107 -131 -6 -25 46 -35 157 -29 58 3\n  121 8 139 11 33 5 34 6 27 42 -7 44 -64 167 -92 201 l-19 24 -105 -118z"/>\n  <path d="M2260 2409 c-31 -44 -68 -133 -77 -186 l-6 -33 155 0 c165 0 201 9\n  181 44 -13 24 -204 216 -214 216 -5 0 -22 -18 -39 -41z"/>\n  <path d="M2786 2354 c-36 -35 0 -87 44 -64 26 14 26 56 1 70 -25 13 -27 13\n  -45 -6z"/>\n  <path d="M2751 2186 c-57 -32 -68 -111 -22 -157 43 -42 101 -43 143 -1 42 42\n  41 100 -1 143 -33 32 -78 38 -120 15z"/>\n  <path d="M2560 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20\n  -54 2z"/>\n  <path d="M3002 2124 c-27 -19 -28 -36 -3 -58 25 -23 61 -6 61 29 0 33 -30 49\n  -58 29z"/>\n  <path d="M2245 1993 c-77 -6 -76 -5 -59 -65 16 -55 61 -146 92 -186 l18 -23\n  103 122 c57 67 104 129 105 138 1 14 -14 16 -104 17 -58 0 -127 -1 -155 -3z"/>\n  <path d="M3165 1981 c-44 -4 -61 -10 -63 -22 -3 -16 210 -229 228 -229 22 0\n  86 141 105 228 l7 32 -109 -2 c-59 -1 -135 -4 -168 -7z"/>\n  <path d="M2776 1914 c-19 -18 -19 -20 -6 -45 6 -11 21 -19 35 -19 20 0 45 24\n  45 44 0 10 -32 36 -45 36 -7 0 -21 -7 -29 -16z"/>\n  <path d="M2589 1743 c-86 -90 -139 -151 -139 -162 0 -25 179 -101 236 -101\n  l27 0 -7 143 c-9 166 -13 187 -35 187 -9 0 -46 -30 -82 -67z"/>\n  <path d="M2936 1801 c-6 -10 -24 -168 -29 -258 -3 -60 -2 -63 19 -63 79 0 262\n  68 248 92 -5 7 -53 64 -108 126 -93 105 -117 124 -130 103z"/>\n  <path d="M10723 3125 c-318 -58 -597 -266 -743 -555 -223 -441 -98 -996 289\n  -1288 112 -84 188 -125 311 -166 274 -91 545 -70 802 61 552 282 735 983 392\n  1500 -225 339 -651 521 -1051 448z m385 -315 c348 -98 579 -443 532 -796 -67\n  -508 -596 -796 -1055 -574 -239 116 -396 352 -412 620 -20 335 192 640 516\n  745 122 40 289 42 419 5z"/>\n  <path d="M11017 2568 c3 -90 9 -167 14 -172 13 -14 53 18 155 122 l95 97 -23\n  18 c-50 40 -189 97 -235 97 -10 0 -11 -33 -6 -162z"/>\n  <path d="M10705 2706 c-50 -16 -133 -58 -163 -82 l-23 -19 121 -107 c67 -60\n  128 -108 135 -108 23 0 27 39 20 186 -8 162 -4 157 -90 130z"/>\n  <path d="M11307 2354 c-59 -65 -107 -126 -107 -136 0 -11 11 -18 38 -22 44 -7\n  278 7 289 17 15 16 -51 183 -94 236 l-19 24 -107 -119z"/>\n  <path d="M10362 2413 c-39 -62 -70 -134 -78 -184 l-7 -39 152 0 c86 0 161 5\n  172 10 17 10 18 13 5 38 -8 15 -59 71 -114 125 l-99 99 -31 -49z"/>\n  <path d="M10888 2359 c-24 -14 -23 -56 2 -69 44 -23 80 29 44 64 -18 19 -23\n  19 -46 5z"/>\n  <path d="M10851 2187 c-49 -29 -66 -101 -35 -146 9 -13 32 -29 50 -37 29 -12\n  39 -12 68 0 99 41 85 180 -19 192 -24 3 -50 -1 -64 -9z"/>\n  <path d="M10660 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20\n  -54 2z"/>\n  <path d="M11096 2124 c-9 -8 -16 -22 -16 -29 0 -13 26 -45 36 -45 20 0 44 25\n  44 45 0 14 -8 29 -19 35 -25 13 -27 13 -45 -6z"/>\n  <path d="M10335 1991 c-60 -6 -60 -6 -57 -36 9 -69 104 -248 122 -229 57 61\n  210 250 207 258 -4 12 -176 17 -272 7z"/>\n  <path d="M11267 1983 c-68 -5 -79 -19 -47 -60 23 -31 200 -193 210 -193 3 0\n  20 24 37 53 29 48 52 111 67 180 l6 27 -107 -2 c-60 -1 -134 -3 -166 -5z"/>\n  <path d="M10870 1910 c-16 -31 4 -62 38 -58 21 2 28 9 30 32 5 45 -47 65 -68\n  26z"/>\n  <path d="M10651 1703 c-56 -59 -101 -113 -101 -120 0 -28 172 -103 237 -103\n  l26 0 -7 123 c-10 179 -15 207 -36 207 -10 0 -63 -48 -119 -107z"/>\n  <path d="M11035 1801 c-7 -12 -23 -144 -29 -243 -4 -77 -4 -78 19 -78 45 0\n  130 22 193 51 l64 29 -19 23 c-65 82 -198 227 -209 227 -7 0 -15 -4 -19 -9z"/>\n  </g>\n  </svg>\n  `}};new class{constructor(){this.navigationView=a,this.navigationView.render(),this.addNavEventlisteners()}addNavEventlisteners(){document.querySelector(".button-garage").addEventListener("click",this.showGarageView),document.querySelector(".button-winners").addEventListener("click",this.showWinnersView)}showGarageView(){document.querySelector(".garage-view").classList.remove("hidden"),document.querySelector(".winners-view").classList.add("hidden")}showWinnersView(){document.querySelector(".winners-view").classList.remove("hidden"),document.querySelector(".garage-view").classList.add("hidden")}},new class{constructor(){this.appModel=o,this.garageView=i,this.winnersView=c,this.garageView.render(),this.updateGarage(),this.addEventListeners()}updateGarage(){const n=document.querySelector(".garage-container");n&&n.remove(),this.appModel.getCars(this.appModel.garagePage).then((({cars:n,carsCount:e})=>{this.garageView.renderGarage(n,e,this.appModel.garagePage),this.appModel.carsCount=Number(e)}))}updateWinners(){const n=document.querySelector(".winners-container");this.appModel.getWinners(this.appModel.winnersPage,this.appModel.sort,this.appModel.order).then((({winners:e,winnersCount:t})=>{n&&n.remove(),this.winnersView.renderWinnersContainer(e),this.appModel.winnersCount=Number(t),document.querySelector(".winners-count").textContent=`Winners(${t})`}))}addEventListeners(){document.querySelector(".button-create-car").addEventListener("click",(()=>this.createCar())),document.querySelector(".garage-view").addEventListener("click",(n=>this.deleteCar(n))),document.querySelector(".garage-view").addEventListener("click",(n=>this.selectCar(n))),document.querySelector(".button-update-car").addEventListener("click",(()=>this.updateCar())),document.querySelector(".button-generate-cars").addEventListener("click",(()=>this.generateCars())),document.querySelector(".garage-view").addEventListener("click",(n=>this.goToPrevPage(n))),document.querySelector(".garage-view").addEventListener("click",(n=>this.goToNextPage(n)))}selectCar(n){const e=document.querySelector(".update-name-input"),t=document.querySelector(".update-color-input"),r=n.target;r.classList.contains("button-select-car")&&(this.appModel.selectedCarId=Number(r.getAttribute("data-id")),this.appModel.getCar(this.appModel.selectedCarId).then((({name:n,color:r})=>{e.value=n,t.value=r})))}unselectCar(){const n=document.querySelector(".update-name-input"),e=document.querySelector(".update-color-input");this.appModel.selectedCarId=null,n.value="",e.value="#ffffff"}updateCar(){const n=document.querySelector(".update-name-input"),e=document.querySelector(".update-color-input"),t={name:n.value,color:e.value};this.appModel.selectedCarId&&this.appModel.updateCar(this.appModel.selectedCarId,t).then((()=>{this.unselectCar(),this.updateGarage(),this.updateWinners()}))}deleteCar(n){const e=n.target;if(e.classList.contains("button-remove-car")){const n=Number(e.getAttribute("data-id"));this.appModel.deleteCar(n).then((()=>{n===this.appModel.selectedCarId&&this.unselectCar(),this.updateGarage()})),this.appModel.deleteWinner(n).then((()=>{this.updateWinners()}))}}createCar(){const n=document.querySelector(".name-input"),e=document.querySelector(".color-input"),t={name:n.value,color:e.value};n.value="",e.value="#ffffff",this.appModel.createCar(t).then((()=>this.updateGarage()))}generateCars(){new Array(100).fill(1).map(this.appModel.getRandomCar).forEach((n=>this.appModel.createCar(n))),this.updateGarage()}goToPrevPage(n){n.target.classList.contains("garage-prev-button")&&this.appModel.garagePage>1&&(this.appModel.garagePage-=1,this.updateGarage())}goToNextPage(n){n.target.classList.contains("garage-next-button")&&this.appModel.carsCount/this.appModel.garagePage>7&&(this.appModel.garagePage+=1,this.updateGarage())}},new class{constructor(){this.appModel=o,this.winnersView=c,this.appModel.getWinners(this.appModel.winnersPage,"id","asc").then((({winners:n,winnersCount:e})=>{this.winnersView.render(this.appModel.winnersPage,e),this.winnersView.renderWinnersContainer(n),this.appModel.winnersCount=Number(e),this.addEventListeners()}))}addEventListeners(){document.querySelector(".winners-view").addEventListener("change",(()=>this.sortAndOrder())),document.querySelector(".winners-view").addEventListener("click",(n=>this.goToPrevPage(n))),document.querySelector(".winners-view").addEventListener("click",(n=>this.goToNextPage(n)))}sortAndOrder(){this.appModel.setSortAndOrder(),this.updateWinnersContainer()}updateWinnersContainer(){const n=document.querySelector(".winners-container");this.appModel.getWinners(this.appModel.winnersPage,this.appModel.sort,this.appModel.order).then((({winners:e,winnersCount:t})=>{n&&n.remove(),this.winnersView.renderWinnersContainer(e),this.appModel.winnersCount=Number(t)}))}goToPrevPage(n){n.target.classList.contains("winners-prev-button")&&this.appModel.winnersPage>1&&(this.appModel.winnersPage-=1,this.updateWinnersContainer())}goToNextPage(n){n.target.classList.contains("winners-next-button")&&this.appModel.winnersCount/this.appModel.winnersPage>7&&(this.appModel.winnersPage+=1,this.updateWinnersContainer())}}})()})();