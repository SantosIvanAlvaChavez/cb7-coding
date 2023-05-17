import { cE, qS, createProduct, createProductModal, qSA } from "./utils/fn.js";

// SYNC
const rootEl = qS("#root");
const containerEl = cE("div");
const formEl = cE("form");
const inputEl = cE("input");
const btnEl = cE("button");
const iconEl = cE("i");
const filterEl = cE("div");
const productList = cE("div");
let productListData = [];

inputEl.className = "searchInput";
inputEl.setAttribute("placeholder", "search");
btnEl.textContent = "Filter";
btnEl.className = "btn";
btnEl.setAttribute("href", "#");
iconEl.classList.add("fa", "fa-filter");
btnEl.appendChild(iconEl);
formEl.append(inputEl, btnEl);

/* smartphones, laptop, fragrances, skincare, groceries, home-decoration*/

containerEl.classList.add("container", "d-flex", "align-items-center");
productList.classList.add("productList", "d-flex", "justify-content-center");
containerEl.append(formEl, filterEl, productList);
rootEl.appendChild(containerEl);

const searchProductEl = qS(".searchInput");

// ASYNC
fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        productListData = data.products;
        productListData.forEach(product => productList.append(createProduct(product)))
    })
    .then(() => {
        const productCardEls = qSA(".productCard");
    
        productCardEls.forEach((product) =>
          product.addEventListener("click", () =>
            fetch(`https://dummyjson.com/products/${product.id}`)
              .then((res) => res.json())
              .then((data) => rootEl.append(createProductModal(data, rootEl)))
          )
        );
      });

// EVENTS
searchProductEl.addEventListener("input", (event) => {
  productList.textContent = "";

  productListData.filter( product => product.description.toLowerCase().includes(event.target.value.toLowerCase()) )
  .forEach( obj => productList.append(createProduct(obj)) )
})
