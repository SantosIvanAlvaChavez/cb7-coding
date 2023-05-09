/*
Esercitazione 1:
Creare un pulsante HTML e un elemento di testo vuoto come una un 'p'.
Aggiungere un gestore di eventi click al pulsante utilizzando il metodo addEventListener().
Al click dell'utente deve modificare il testo dell'elemento di testo per visualizzare un messaggio di saluto.
*/

const btn = document.querySelector(".btn");
const paragraph = document.querySelector(".paragraph");

btn.addEventListener("click", changeText);

function changeText(){
    paragraph.textContent = "Hi there!!";
    btn.textContent = "Fatto"
}

/*
Esercitazione 2:
Creare un campo di input HTML e un pulsante.
Aggiungere un gestore di eventi 'submit'.
Al submit dell'utente il gestore di eventi deve leggere il valore dell'input dell'utente e visualizzarlo in un elemento di testo come un 'div' o un 'p'.
*/

const input = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();

    if (text !== ""){
        const p = document.createElement("p");
        p.textContent = text;
        form.insertAdjacentElement("afterend", p)
    }

    input.value = "";
})


/*
Esercitazione 3 - Avanzato:
creare un 'input', una lista HTML 'ul' e un 'button' "Aggiungi elemento" che aggiungerà un elemento alla lista.
l'elemento aggiunto deve contenere come "textContent" il valore dell'input inserito
*/

const containerInput = document.querySelector(".container__input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (event) => {
    event.preventDefault();
  
    const textInput = containerInput.value.trim();
  
    if (textInput !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = textInput;
    
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
    
        containerInput.value = "";
        empty.style.display = "none";
    }
  });

function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
  
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";
  
    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
    
        const items = document.querySelectorAll("li");
    
        if (items.length === 0) {
            empty.style.display = "block";
        }
    });
  
    return deleteBtn;
}
