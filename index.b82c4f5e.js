const n=document.querySelector(".modal");async function o(n){const o={bookId:""};try{const e=await fetch(`https://books-backend.p.goit.global/books/${n}`),t=await e.json();return o.bookId=t._id,console.log(o),t}catch(n){throw console.error("Error",n),n}}!async function(e){try{!function(o){const e=`\n  <img src="${o.book_image}" alt="Book Image" class="image__about-book-modal">\n  <h2>${o.title}</h2>\n  <p> ${o.author}</p>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, iure nam facere exercitationem quibusdam cum in quasi impedit perferendis porro. Vero quos minima doloribus magni corporis beatae ducimus officiis! Rerum?</p>\n  <ul> <li><a href="${o.buy_links[0].url}" target="_blank"\n    > <img\n    width="28"\n    height="28"\n    src="src/images/png-icons/shops/amazon-icon.png"\n    alt="close-icon"\n  /></a></li>\n  <li><a href="${o.buy_links[1].url}" target="_blank"\n    > <img\n    width="28"\n    height="28"\n    src="src/images/png-icons/shops/first-book-shop-icon.png"\n    alt="close-icon"\n  /></a></li>\n  <li><a href="${o.buy_links[4].url}" target="_blank"\n    > <img\n    width="28"\n    height="28"\n    src="src/images/png-icons/shops/second-book-shop-icon.png"\n    alt="close-icon"\n  /></a></li>\n</ul>\n  `;n.insertAdjacentHTML("beforeend",e)}(await o(e))}catch(n){throw console.error("Error",n),n}}("643282b2e85766588626a0fc");const e=document.querySelector(".storage-button");e.addEventListener("click",(function(n){localStorage.setItem("storage-data",JSON.stringify(n))}));const t=document.getElementById("openModalBtn"),i=document.querySelector(".modal"),c=i.querySelector(".close-modal-btn"),s=document.querySelector(".js-backdrop-modal");function r(){i.classList.add("is-hidden")}t.addEventListener("click",(function(){i.classList.remove("is-hidden")})),c.addEventListener("click",r),document.addEventListener("keydown",(function(n){"Escape"===n.key&&r()})),s.addEventListener("click",(function(n){n.target===s&&r()}));
//# sourceMappingURL=index.b82c4f5e.js.map
