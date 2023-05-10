/*
Esercizio 2
Utilizzando callbacks, ricreare la calcolatrice in forma base includento il DOM, pertanto non avremo più i risultati via console, ma direttamente renderizzati sulla pagina (qualunque interpretazione qui va bene, e qualunque grado di complessità verrà valutato positivamente, per es. potrete avere anche un solo operatore e due valori da sommare)
*/

const cal = document.querySelector(".cal");

let op;

document.querySelector('.sum').addEventListener('click', () => op = '+');
document.querySelector('.sub').addEventListener('click', () => op = '-');
document.querySelector('.mul').addEventListener('click', () => op = '*');
document.querySelector('.div').addEventListener('click', () => op = '/');

cal.addEventListener("click", () => {
    let num1 = parseInt(document.querySelector(".first-input").value)
    let num2 = parseInt(document.querySelector(".second-input").value)

    let result;

    switch(op){
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "*":
            result = num1 * num2
            break;
        case "/":
            result = num1 / num2
            break;
        default:
            result = "Clicca l'operatore aritmetico"
    }

    document.querySelector(".result").textContent = "Risultato: " + result;
})
