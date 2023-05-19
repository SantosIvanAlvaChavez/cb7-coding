import { cartItems, cartEl, containerEl, navbarEl, heroEl, searchProductEl, btnInputEl, rootEl } from "../main.js";
import usersList from "./credentials.js";

export const cE = (element) => document.createElement(element);
export const qS = (element) => document.querySelector(element); 
export const qSA = (elements) => document.querySelectorAll(elements);

const formatDescriptionText = (str) =>
  str.split(" ").splice(0, 7).join(" ") + " ...";


//Card
export const createProduct = (data) => {
    const wrapperEl = cE("div");
    const textWrapperEl = cE("div");
    const imageEl = cE("img");
    const titleEl = cE("h3");
    const descriptionEl = cE("p");
    const ratingEl = cE("p");
    const priceEl = cE("h4");

    wrapperEl.classList.add("productCard", "d-flex", "justify-content-between");
    wrapperEl.setAttribute("id", data.id);
    textWrapperEl.className = "productCard__text";
    imageEl.src = data.thumbnail;
    imageEl.alt = data.title;
    titleEl.textContent = data.title;
    descriptionEl.textContent = formatDescriptionText(data.description);
    ratingEl.textContent = "Rating: " + data.rating + " ⭐";
    priceEl.textContent = "Price: " + data.price + "$";

    wrapperEl.append(imageEl, textWrapperEl, titleEl, descriptionEl, ratingEl, priceEl);

    return wrapperEl;
}

//Modale
export const createProductModal = (productData, parent = null) => {
    const wrapperEl = cE("div");
    const overlayEl = cE("div");
    const galleryEl = cE("div");
    const mainImgEl = cE("img");
    const textEl = cE("div");
    const mainTextEl = cE("div");
    const mainTextTitleEl = cE("h1");
    const mainTextDescEl = cE("p");
    const mainTextRateEl = cE("p");
    const buyTextEl = cE("div");
    const buyTextFirstBtnEl = cE("a");
    const buyTextSecondBtnEl = cE("a");
  
    wrapperEl.classList.add("modalProduct", "d-flex");
    overlayEl.className = "modalOverlay";
    galleryEl.className = "modalProduct__gallery";
    mainImgEl.src = productData.thumbnail;
    mainImgEl.alt = productData.title;
  
    textEl.classList.add("modalProduct__text", "d-flex", "justify-content-center");
    mainTextEl.className = "modalMainText";
    mainTextTitleEl.textContent = productData.title;
    mainTextDescEl.textContent = productData.description;
    mainTextRateEl.textContent = "Rating: " + productData.rating + " ⭐";
  
    buyTextEl.classList.add("modalMainBuy", "d-flex");
    buyTextFirstBtnEl.textContent = "Buy now";
    buyTextFirstBtnEl.className = "btn";
    buyTextFirstBtnEl.setAttribute("href", "#");
    buyTextSecondBtnEl.textContent = "Go back";
    buyTextSecondBtnEl.className = "btn-secondary";
    buyTextSecondBtnEl.setAttribute("href", "#");
  
    mainTextEl.append(mainTextTitleEl, mainTextDescEl, mainTextRateEl);
    buyTextEl.append(buyTextFirstBtnEl, buyTextSecondBtnEl);
    galleryEl.append(mainImgEl);
    textEl.append(mainTextEl, buyTextEl);
    wrapperEl.append(overlayEl, galleryEl, textEl);
  
    if (parent) {
      overlayEl.addEventListener("click", () => parent.removeChild(wrapperEl));
      buyTextSecondBtnEl.addEventListener("click", () => parent.removeChild(wrapperEl))
    }

    buyTextFirstBtnEl.addEventListener("click", () => {
      cartItems.push(productData);
      parent.removeChild(wrapperEl);

      if(cartItems.length >= 1){
        cartEl.classList.add("itemsInCart")
      }
    })
  
    return wrapperEl;
  };


//Cart Modal
export const createCartModal = (cartItems, parent = null) => {
  const wrapperEl = cE("div");
  const totalItemsEl = cE("h3");
  const closeBtnEl = cE("button");
  const priceEl = cE("h3");

  wrapperEl.className = "cartModal";
  totalItemsEl.textContent = `Prodotti presenti nel carrello: ${cartItems.length}`;
  closeBtnEl.className = "cartModal__closeBtn";
  closeBtnEl.textContent = "X";
  priceEl.textContent = `Totale: ${cartItems.reduce((acc, item) => acc + item.price, 0)}$`;

  cartItems.forEach( item =>  {
    wrapperEl.append(closeBtnEl, createProduct(item), totalItemsEl, priceEl);
  })

  closeBtnEl.addEventListener("click", () => {
    parent.removeChild(wrapperEl);
    cartEl.disabled = false;

  })

  return wrapperEl;
}

export const createLogIn = () => {
  const wrapperEl = cE("form");
  const usernameInputEl = cE("input");
  const passwordInputEl = cE("input");
  const submitBtnEl = cE("input");

  wrapperEl.classList.add("login", "d-flex", "justify-content-center", "align-items-center");
  usernameInputEl.type = "text";
  usernameInputEl.placeholder = "Username";
  passwordInputEl.type = "password";
  passwordInputEl.placeholder = "Password";
  submitBtnEl.type = "submit";

  wrapperEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const isAuth = usersList.find( user => 
      user.username === event.srcElement[0].value &&
      user.password === event.srcElement[1].value
      )

    if(isAuth){
        navbarEl.style.display = "flex";
        heroEl.style.display = "flex";
        navbarEl.appendChild(containerEl);
        heroEl.appendChild(containerEl);
        rootEl.appendChild(containerEl);
        rootEl.removeChild(wrapperEl);
      
        const productCardEls = qSA(".productCard");
    
        productCardEls.forEach((product) =>
          product.addEventListener("click", () =>
            fetch(`https://dummyjson.com/products/${product.id}`)
              .then((res) => res.json())
              .then((data) => rootEl.append(createProductModal(data, rootEl)))
          )
        );
        
    } else {
      alert("Dati inseriti corretti");
    }
  })

  wrapperEl.append(usernameInputEl, passwordInputEl, submitBtnEl);
  return wrapperEl;
}
