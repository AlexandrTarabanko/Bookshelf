!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},r.parcelRequired7c6=i),i.register("iE7OH",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.102daf19.js","1UC96":"big-placeholder.eaf37d8e.png","1Qsmf":"medium-placeholder.af4bbc1d.png","eWCYn":"small-placeholder.a57fe244.png"}'));var a={};a=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("1UC96");var c={};c=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("1Qsmf");var l={};l=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("eWCYn");const s=document.querySelector(".category__list"),u=document.querySelector(".category__books"),f="https://books-backend.p.goit.global/books/category";s.addEventListener("click",(async function(e){if("BUTTON"!==e.target.nodeName)return;const r=e.target.name;try{const e=await async function(e){try{const t=`${f}?category=${e}`,r=await fetch(t);if(!r.ok)throw new Error(`Server responded with status: ${r.status}`);return await r.json()}catch(e){return console.error(`Failed to fetch category: ${e.message}`),[]}}(r),n=await async function(e,r){if(0===e.length){let e=t(a);return window.innerWidth<768?e=t(l):window.innerWidth<1280&&(e=t(c)),`<li class="book">\n             <img src="${e}" alt="No books found" />\n              <h3>No books found</h3>\n            </li>`}let n=r.split(" ");n[n.length-1]=`<span class='highlight'>${n[n.length-1]}</span>`,r=n.join(" ");document.querySelector(".category-title").innerHTML=`<h2 class="category-title">${r}</h2>`;let o="";return o+=e.map((({title:e,author:t,book_image:r,_id:n})=>`<li id="${n}" class="book">\n        <img src="${r}" alt="${e}" />\n        <h3>${e}</h3>\n        <p>${t}</p>\n      </li>`)).join(""),o}(e,r);u.innerHTML=n}catch(e){console.error(e.message)}}))}();
//# sourceMappingURL=index.102daf19.js.map
