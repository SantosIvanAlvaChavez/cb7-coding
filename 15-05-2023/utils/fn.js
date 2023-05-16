export const cE = (element) => document.createElement(element);
export const qS = (element) => document.querySelector(element); 

export const createProduct = (data) => {
    const wrapperEl = cE("div");
    const imageEl = cE("img");
    const titleEl = cE("h3");
    const descriptionEl = cE("p");
    const ratingEl = cE("p");
    const priceEl = cE("h4");
    const buttonEl = cE("a");

    wrapperEl.classList.add("productCard", "d-flex", "justify-content-between");
    imageEl.src = data.thumbnail;
    imageEl.alt = data.title;
    titleEl.textContent = data.title;
    descriptionEl.textContent = data.description;
    ratingEl.textContent = "Rating: " + data.rating + "⭐";
    priceEl.textContent = "Price: " + data.price + "$";
    buttonEl.textContent = "Add to cart";
    buttonEl.className = "btn"
    buttonEl.setAttribute("href", "/");

    wrapperEl.append(imageEl, titleEl, descriptionEl, ratingEl, priceEl, buttonEl);

    return wrapperEl;
}

