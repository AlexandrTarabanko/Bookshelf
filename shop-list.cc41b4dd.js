function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){o[t]=e},e.parcelRequired7c6=a),a("kyEFX").register(JSON.parse('{"aoZhb":"shop-list.cc41b4dd.js","4AGaC":"amazon-icon1x.a7ec3af8.png","9Ah0R":"amazon-icon2x.20dbc182.png","8uc1C":"applebook-icon1x.a9f158e0.png","3fItF":"applebook-icon2x.cdd3fb2c.png","hTaYv":"bookshop-icon1x.eb5fbc1e.png","cdwLe":"bookshop-icon2x.7a15867f.png","lp5u4":"sprite.12b7694d.svg","35kVv":"empty-desktop-tablet@1x.017eaa98.png","6fa5k":"empty-desktop-tablet@2x.55899084.png","49jvD":"empty-mobile@1x.0a4ea4b8.png","6THUv":"empty-mobile@2x.d86ac43c.png","1g4pr":"shop-list.3d2d4c2f.js","6LQ1T":"shop-list.b419d2a6.css"}'));var r={};r=new URL(a("kyEFX").resolve("lp5u4"),import.meta.url).toString();var s={};s=new URL(a("kyEFX").resolve("35kVv"),import.meta.url).toString();var i={};i=new URL(a("kyEFX").resolve("6fa5k"),import.meta.url).toString();var l={};l=new URL(a("kyEFX").resolve("49jvD"),import.meta.url).toString();var c={};c=new URL(a("kyEFX").resolve("6THUv"),import.meta.url).toString();var p={};p=new URL(a("kyEFX").resolve("4AGaC"),import.meta.url).toString();var d={};d=new URL(a("kyEFX").resolve("9Ah0R"),import.meta.url).toString();var m={};m=new URL(a("kyEFX").resolve("8uc1C"),import.meta.url).toString();var u={};u=new URL(a("kyEFX").resolve("3fItF"),import.meta.url).toString();var _={};_=new URL(a("kyEFX").resolve("hTaYv"),import.meta.url).toString();var g={};g=new URL(a("kyEFX").resolve("cdwLe"),import.meta.url).toString(),a("dUJfD");const f=document.querySelector(".js-shopping-cart"),h=document.querySelector(".js-cart-list"),v="storage-data";function b(){const e=JSON.parse(localStorage.getItem(v));e&&0!==e.length?function(e,n){const o=n.map((({id:e,book_image:n,title:o,author:a,marketAmazon:s,marketAppleBooks:i,marketBookshop:l,list_name:c})=>`\n\t\t\t<li class="cart__item card js-card" data-book-id="${e}">\n        <picture>\n          <img\n            src="${n||"./images/placeholders/very-small-placeholder.png"}"\n            alt="${o}"\n            class="card__img"\n            width="110"\n            height="142"\n          />\n        </picture>\n        <div class="card__content">\n          <h3 class="card__title">${o.trim()}</h3>\n          <p class="card__category">${c.trim()}</p>\n          <p class="card__description">\n            Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n            Temporibus, architecto voluptate sint debitis ab fugit\n            laudantium nostrum dolore quisquam? Laboriosam nulla eum a,\n            quo, molestiae sed error possimus expedita veniam maiores\n            nam maxime provident quod blanditiis cum voluptate. A\n            provident corrupti dignissimos ullam. Porro architecto\n            maiores est ullam sed. Cum.\n          </p>\n          <div class="card__footer">\n            <p class="card__author">${a.trim()}</p>\n            <ul class="card__shops list">\n              <li class="shop">\n                <a\n                  href="${s}"\n                  target="_blank"\n                  rel="noopener nofollow"\n                >\n                  <img class="shop__image--amazon"\n                    width="28"\n                    height="28"\n\t\t\t\t\t\t\t\t\t\tsrcset="\n\t\t\t\t\t\t\t\t\t\t\t${t(p)} 1x,\n\t\t\t\t\t\t\t\t\t\t\t${t(d)} 2x\n\t\t\t\t\t\t\t\t\t\t"\n                    src="${t(p)}"\n                    alt="amazon.com"\n                /></a>\n              </li>\n              <li class="shop">\n                <a\n                  href="${i}"\n                  target="_blank"\n                  rel="noopener nofollow"\n                >\n                  <img class="shop__image--apple"\n                    width="28"\n                    height="28"\n                    srcset="\n\t\t\t\t\t\t\t\t\t\t\t${t(m)} 1x,\n\t\t\t\t\t\t\t\t\t\t\t${t(u)} 2x\n\t\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\t\tsrc="${t(m)}"\n                    alt="books.apple.com"\n                /></a>\n              </li class="shop">\n              <li>\n                <a\n                  href="${l}"\n                  target="_blank"\n                  rel="noopener nofollow"\n                >\n                  <img class="shop__image--bookshop"\n                    width="28"\n                    height="28"\n                    srcset="\n\t\t\t\t\t\t\t\t\t\t\t${t(_)} 1x,\n\t\t\t\t\t\t\t\t\t\t\t${t(g)} 2x\n\t\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\t\tsrc="${t(_)}"\n                    alt="bookshop.org"\n                /></a>\n              </li>\n            </ul>\n          </div>\n          <button\n            class="card__delete button js-card__delete"\n            type="button"\n          >\n            <svg class="icon-delete" width="22" height="22">\n              <use href="${t(r)}#icon-bin"></use>\n            </svg>\n          </button>\n        </div>\n      </li>`)).join("");e.innerHTML=o}(h,e):function(){const e=`\n\t\t<div class="cart-empty">\n      <p class="cart-empty__text">\n        This page is empty, add some books and proceed to order.\n      </p>\n      <picture>\n        <source\n          srcset="\n            ${t(s)} 1x,\n            ${t(i)} 2x\n          "\n\t\t\t\t\tmedia="(min-width: 768px)"\n        />\n        <img\n          srcset="\n            ${t(l)} 1x,\n            ${t(c)} 2x\n            "\n          src="${t(l)}"\n          alt="Empty cart"\n          class="cart-empty__img"\n        />\n      </picture>\n\t\t</div>`;f.innerHTML=e}()}h.addEventListener("click",(function(t){if(t.target.classList.contains("js-card__delete")){const e=t.target.closest(".js-card"),n=e.dataset.bookId,o=JSON.parse(localStorage.getItem(v)),a=o.findIndex((t=>t.id===n));o.splice(a,1),localStorage.setItem(v,JSON.stringify(o)),e.remove(),b()}})),b();
//# sourceMappingURL=shop-list.cc41b4dd.js.map