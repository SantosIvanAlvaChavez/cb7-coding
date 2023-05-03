/* 
Esercizio 1
Sulla base della lezione del giorno, scrivere un piccolo programmino che preso un input da parte dell'utente (prompt) di tipo number, verifichi se questo è pari o dispari e lo stampi in console. Si utilizzi il costrutto if-else
*/

//Get data from User
let userNumber = parseInt( prompt("Inserisci un numero") );

//Check data
while( isNaN(userNumber)){
    userNumber = parseInt( prompt("Inserisci un numero") );
}

//Check pari or dispari
if (userNumber % 2 == 0) {
    console.log(`Numero inserito: ${userNumber} ed è pari`);
} else {
    console.log(`Numero inserito: ${userNumber} ed è dispari`);
}


/*
Esercizio 2
Svolgere lo stesso esercizio 1, utilizzando l'operatore ternario.
*/

//Get data from User
let userNumber2 = parseInt( prompt("Inserisci un numero") );

//Check data
while( isNaN(userNumber2)){
    userNumber2 = parseInt( prompt("Inserisci un numero") );
}

//Check pari or dispari
userNumber2 % 2 == 0
    ? console.log(`Numero inserito: ${userNumber2} ed è pari`)
    : console.log(`Numero inserito: ${userNumber2} ed è dispari`);


/*
Avanzato
Utilizzando gli operatori matematici e avvalendosi del costrutto switch, scrivere un piccolo programmino che simuli una calcolatrice. Questo, deve chiedere all'utente due numeri e un operatore matematico da scegliere. Infine deve essere mostrato in console il valore risultato dai due numeri e dall'operazione scelta dall'utente.
*/

//Get data from User
let number1 = parseInt( prompt("Inserisci il primo numero") );
let number2 = parseInt( prompt("Inserisci il secondo numero") );

//Check data
while( isNaN(number1) || isNaN(number2) ){
    number1 = parseInt( prompt("Inserisci il primo numero") );
    number2 = parseInt( prompt("Inserisci il secondo numero") );
}

let mathSymbol= prompt("Quale operazione vuoi eseguire?\n+\n-\n*\n/");

let result = 0;

//Evaluating
switch (mathSymbol) {
    case "+" :
        result = number1 + number2;
        break;
    case "-" :
        result = number1 - number2;
        break;
    case "*" :
        result = number1 * number2;
        break; 
    case "/" :
        result = number1 / number2;
        break;
    default :
        result = "Operazione non possibile";
}

//Output
console.log("Primo Numero:", number1);
console.log("Secondo Numero:", number2);
console.log("Operazione Scelta:", mathSymbol);
console.log("Risultato:", result);