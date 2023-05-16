import { cE, qS, createProduct } from "./utils/fn.js";

// const productMock = 
//     {
//     "id": 1,
//     "title": "iPhone 9",
//     "description": "An apple mobile which is nothing like apple",
//     "price": 549,
//     "discountPercentage": 12.96,
//     "rating": 4.69,
//     "stock": 94,
//     "brand": "Apple",
//     "category": "smartphones",
//     "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//     "images": [
//     "https://i.dummyjson.com/data/products/1/1.jpg",
//     "https://i.dummyjson.com/data/products/1/2.jpg",
//     "https://i.dummyjson.com/data/products/1/3.jpg",
//     "https://i.dummyjson.com/data/products/1/4.jpg",
//     "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//     ]
//     }
    
const rootEl = qS("#root");
const containerEl = cE("div");
const formEl = cE("form");
const inputEl = cE("input");
const btnEl = cE("a")
const filterEl = cE("div");
const productList = cE("div")

containerEl.classList.add("container", "d-flex", "align-items-center");

inputEl.className = "inputList";
inputEl.setAttribute("placeholder", "search");
btnEl.textContent = "Filter";
btnEl.className = "btn";
btnEl.setAttribute("href", "/");
formEl.append(inputEl, btnEl)

/* smartphones, laptop, fragrances, skincare, groceries, home-decoration*/



productList.classList.add("productList", "d-flex", "justify-content-center");
// productList.append(createProduct(productMock));
fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => data.products.forEach(product => productList.append(createProduct(product))))


containerEl.append(formEl, filterEl, productList);
rootEl.appendChild(containerEl);