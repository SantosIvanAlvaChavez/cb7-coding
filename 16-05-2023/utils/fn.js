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
    const buttonEl = cE("a");

    wrapperEl.classList.add("productCard", "d-flex", "justify-content-between");
    wrapperEl.setAttribute("id", data.id);
    textWrapperEl.className = "productCard__text";
    imageEl.src = data.thumbnail;
    imageEl.alt = data.title;
    titleEl.textContent = data.title;
    descriptionEl.textContent = formatDescriptionText(data.description);
    ratingEl.textContent = "Rating: " + data.rating + " ⭐";
    priceEl.textContent = "Price: " + data.price + "$";
    buttonEl.textContent = "Add to cart";
    buttonEl.className = "btn"
    buttonEl.setAttribute("href", "#");

    wrapperEl.append(imageEl, textWrapperEl, titleEl, descriptionEl, ratingEl, priceEl, buttonEl);

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
    }
  
    return wrapperEl;
  };

