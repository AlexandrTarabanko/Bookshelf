function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=n.parcelRequired7c6;null==a&&((a=function(t){if(t in o)return o[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},n.parcelRequired7c6=a),a.register("kyEFX",(function(e,n){var o,r;t(e.exports,"register",(function(){return o}),(function(t){return o=t})),t(e.exports,"resolve",(function(){return r}),(function(t){return r=t}));var a={};o=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)a[e[n]]=t[e[n]]},r=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),a("kyEFX").register(JSON.parse('{"aoZhb":"shop-list.2d133014.js","lp5u4":"sprite.00bab1c2.svg","35kVv":"empty-desktop-tablet@1x.017eaa98.png","6fa5k":"empty-desktop-tablet@2x.55899084.png","49jvD":"empty-mobile@1x.0a4ea4b8.png","6THUv":"empty-mobile@2x.d86ac43c.png","4AGaC":"amazon-icon1x.a7ec3af8.png","9Ah0R":"amazon-icon2x.20dbc182.png","8uc1C":"applebook-icon1x.a9f158e0.png","3fItF":"applebook-icon2x.cdd3fb2c.png","hTaYv":"bookshop-icon1x.eb5fbc1e.png","cdwLe":"bookshop-icon2x.7a15867f.png","6LQ1T":"index.9fc21abc.css","9m5pa":"index.f9c963e4.js"}'));var i={};i=new URL(a("kyEFX").resolve("lp5u4"),import.meta.url).toString();var s={};s=new URL(a("kyEFX").resolve("35kVv"),import.meta.url).toString();var l={};l=new URL(a("kyEFX").resolve("6fa5k"),import.meta.url).toString();var c={};c=new URL(a("kyEFX").resolve("49jvD"),import.meta.url).toString();var p={};p=new URL(a("kyEFX").resolve("6THUv"),import.meta.url).toString();var d={};d=new URL(a("kyEFX").resolve("4AGaC"),import.meta.url).toString();var m={};m=new URL(a("kyEFX").resolve("9Ah0R"),import.meta.url).toString();var u={};u=new URL(a("kyEFX").resolve("8uc1C"),import.meta.url).toString();var g={};g=new URL(a("kyEFX").resolve("3fItF"),import.meta.url).toString();var _={};_=new URL(a("kyEFX").resolve("hTaYv"),import.meta.url).toString();var f={};f=new URL(a("kyEFX").resolve("cdwLe"),import.meta.url).toString(),a("dUJfD");const v=document.querySelector(".js-shopping-cart"),h=document.querySelector(".js-cart-list"),b="storage-data";function k(){const t=JSON.parse(localStorage.getItem(b));t&&0!==t.length?function(t,n){const o=n.map((({id:t,book_image:n,title:o,author:r,marketAmazon:a,marketAppleBooks:s,marketBookshop:l,list_name:c})=>`\n\t\t\t<li class="cart__item card js-card" data-book-id="${t}">\n        <picture>\n          <img\n            src="${n||"./images/placeholders/very-small-placeholder.png"}"\n            alt="${o}"\n            class="card__img"\n            width="110"\n            height="142"\n          />\n        </picture>\n        <div class="card__content">\n          <h3 class="card__title">${o.trim()}</h3>\n          <p class="card__category">${c.trim()}</p>\n          <p class="card__description">\n            Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n            Temporibus, architecto voluptate sint debitis ab fugit\n            laudantium nostrum dolore quisquam? Laboriosam nulla eum a,\n            quo, molestiae sed error possimus expedita veniam maiores\n            nam maxime provident quod blanditiis cum voluptate. A\n            provident corrupti dignissimos ullam. Porro architecto\n            maiores est ullam sed. Cum.\n          </p>\n          <div class="card__footer">\n            <p class="card__author">${r.trim()}</p>\n            <ul class="card__shops list">\n              <li class="shop">\n                <a\n                  href="${a}"\n                  target="_blank"\n                  rel="noopener nofollow"\n                >\n                  <img class="shop__image--amazon"\n                    width="28"\n                    height="28"\n\t\t\t\t\t\t\t\t\t\tsrcset="\n\t\t\t\t\t\t\t\t\t\t\t${e(d)} 1x,\n\t\t\t\t\t\t\t\t\t\t\t${e(m)} 2x\n\t\t\t\t\t\t\t\t\t\t"\n                    src="${e(d)}"\n                    alt="amazon.com"\n                /></a>\n              </li>\n              <li class="shop">\n                <a\n                  href="${s}"\n                  target="_blank"\n                  rel="noopener nofollow"\n                >\n                  <img class="shop__image--apple"\n                    width="28"\n                    height="28"\n                    srcset="\n\t\t\t\t\t\t\t\t\t\t\t${e(u)} 1x,\n\t\t\t\t\t\t\t\t\t\t\t${e(g)} 2x\n\t\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\t\tsrc="${e(u)}"\n                    alt="books.apple.com"\n                /></a>\n              </li class="shop">\n              <li>\n                <a\n                  href="${l}"\n                  target="_blank"\n                  rel="noopener nofollow"\n                >\n                  <img class="shop__image--bookshop"\n                    width="28"\n                    height="28"\n                    srcset="\n\t\t\t\t\t\t\t\t\t\t\t${e(_)} 1x,\n\t\t\t\t\t\t\t\t\t\t\t${e(f)} 2x\n\t\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\t\tsrc="${e(_)}"\n                    alt="bookshop.org"\n                /></a>\n              </li>\n            </ul>\n          </div>\n          <button\n            class="card__delete button js-card__delete"\n            type="button"\n          >\n            <svg class="icon-delete" width="22" height="22">\n              <use x="1%" href="${e(i)}#icon-bin"></use>\n            </svg>\n          </button>\n        </div>\n      </li>`)).join("");t.innerHTML=o}(h,t):function(){const t=`\n\t\t<div class="cart-empty">\n      <p class="cart-empty__text">\n        This page is empty, add some books and proceed to order.\n      </p>\n      <picture>\n        <source\n          srcset="\n            ${e(s)} 1x,\n            ${e(l)} 2x\n          "\n\t\t\t\t\tmedia="(min-width: 768px)"\n        />\n        <img\n          srcset="\n            ${e(c)} 1x,\n            ${e(p)} 2x\n            "\n          src="${e(c)}"\n          alt="Empty cart"\n          class="cart-empty__img"\n        />\n      </picture>\n\t\t</div>`;v.innerHTML=t}()}h.addEventListener("click",(function(t){if(t.target.classList.contains("js-card__delete")){const e=t.target.closest(".js-card"),n=e.dataset.bookId,o=JSON.parse(localStorage.getItem(b)),r=o.findIndex((t=>t.id===n));o.splice(r,1),localStorage.setItem(b,JSON.stringify(o)),e.remove(),k()}})),k();
//# sourceMappingURL=shop-list.2d133014.js.map