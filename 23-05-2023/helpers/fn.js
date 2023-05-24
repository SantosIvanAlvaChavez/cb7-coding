
export const createEl = (type, content, ...attrs) => {
    const element = document.createElement(type);
    element.textContent = content;
    attrs.forEach( attr => element.setAttribute(attr?.name, attr?.value));

    return element;
}

export const createProdInCart = (cartData) => {
    const wrapperEl = createEl("div", "", {name: "class", value: "cartItem"});
    const titleEl = createEl("h4", cartData.title);
    const priceEl = createEl("p", "Price: " + cartData.price);
    const quantityEl = createEl("p", "Quantity: " + cartData.quantity);
    wrapperEl.append(titleEl, priceEl, quantityEl);

    return wrapperEl;
}
