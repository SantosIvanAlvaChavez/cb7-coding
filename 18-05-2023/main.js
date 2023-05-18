import { cE, qS, qSA, createProduct, createProductModal, createCartModal } from "./utils/fn.js";

// SYNC
const rootEl = qS("#root");
const containerEl = cE("div");
const formEl = cE("form");
const inputEl = cE("input");
const btnEl = cE("button");
const iconEl = cE("i");
const filterEl = cE("div");
const productList = cE("div");
export const cartEl = qS(".cart");
let productListData = [];
export let cartItems = [];

inputEl.className = "searchInput";
inputEl.setAttribute("placeholder", "search");
btnEl.textContent = "Filter";
btnEl.className = "inputBtn";
iconEl.classList.add("fa", "fa-filter");
btnEl.appendChild(iconEl);
formEl.append(inputEl, btnEl);

/* smartphones, laptop, fragrances, skincare, groceries, home-decoration*/

containerEl.classList.add("container", "d-flex", "align-items-center");
productList.classList.add("productList", "d-flex", "justify-content-center");
containerEl.append(formEl, filterEl, productList);
rootEl.appendChild(containerEl);

const searchProductEl = qS(".searchInput");
const btnInputEl = qS(".inputBtn");

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
btnInputEl.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(event.target.innerText)

  productList.textContent = "";
  
  const filterProducts = productListData.filter( product => product.description.toLowerCase().includes(searchProductEl.value.toLowerCase()) )
  
  if(filterProducts.length == 0) {
    productList.textContent = "There are no products"
  }

  filterProducts.forEach( obj => productList.append(createProduct(obj)) )

})

cartEl.addEventListener("click", () => {
  rootEl.append(createCartModal(cartItems, rootEl));
  const cartModal = qS(".cartModal");
  cartEl.disabled = true;
  cartModal.classList.add("cartModal__active");
})

