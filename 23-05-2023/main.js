import { createEl, createProdInCart } from "./helpers/fn.js";
import { GET } from "./helpers/http.js";
import usersList from "./helpers/credentials.js"

const root = document.querySelector("#root");
const loginModalEl = createEl("form", "", {name: "class", value: "login"});
const loginTitleEl = createEl("h2", "Log in", {name: "login", value: "login__title"});
const loginUsernameEl = createEl("input", "", {name: "type", value: "text"}, {name: "placeholder", value: "Inserisci username"} );
const loginPasswordEl = createEl("input", "", {name: "type", value: "password"}, {name: "placeholder", value: "Inserisci password"} );
const loginSubmitEl = createEl("input", "", {name: "type", value: "submit"}, {name: "value", value: "Accedi"});

loginModalEl.append(loginTitleEl, loginUsernameEl, loginPasswordEl, loginSubmitEl);
root.appendChild(loginModalEl);

//Events
loginModalEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const isAuth = usersList.find(user => user.username === e.target[0].value && user.password === e.target[1].value);

    if(isAuth){
        root.textContent = "";
        const headingEl = createEl("h1", `${isAuth.username}, Benvenuto al tuo carrello!`, {name: "class", value: "cart__title"});
        const cartListEl = createEl("div", "", {name: "class", value: "cart__cartList"});
        
        GET(`carts/${isAuth.id}`)
            .then( data => data.products.forEach(product => cartListEl.append(createProdInCart(product))) )
            .then( () => root.append(headingEl, cartListEl) )
        
    } else {
        alert("credenziali errate");
        loginUsernameEl.value = "";
        loginPasswordEl.value = "";
    }
})


