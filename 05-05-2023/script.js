/*
Esercizio 2
Utilizzando le funzioni, riscrivere la calcolatrice creata durante l'esercitazione di giorno 03-05-2023.
*/

function calculate(){

    //Get data from User
    let number1 = parseInt( prompt("Inserisci il primo numero") );
    let number2 = parseInt( prompt("Inserisci il secondo numero") );
    
    //Check data
    while( isNaN(number1) || isNaN(number2) ){
        number1 = parseInt( prompt("Inserisci il primo numero") );
        number2 = parseInt( prompt("Inserisci il secondo numero") );
    }
    
    let mathSymbol = prompt("Quale operazione vuoi eseguire?\n+\n-\n*\n/");
    
    let result;
    
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

    console.log(
    `
        Primo numero inserito: ${number1}
        Secondo numero inserito: ${number2}
        Operatore scelto: ${mathSymbol}
        Risultato: ${result}
    `
    )
}

//Invocation
calculate();


/*
Esercizio 3
Scrivere un oggetto che vi descriva, e stampare in console alcune di queste informazioni. Giusto per cominciare a prendere pratica con la sintassi e come richiamare valori di oggetti.
*/

const description = {
    name: "Ivan",
    surname: "Alva",
    age: 33,
    address: {
        street: "Piazza Napoli",
        number: 2,
        city: "Milano",
        zipcode: 12345,
    }
}

console.log(
    `   
        Mi chiamo ${description.name} ${description.surname}, ho ${description.age} anni.
        Il mio indirizzo è: ${description.address.street}, ${description.address.number} - ${description.address.city}, cap ${description.address.zipcode}
    `
)


/*
Avanzato
Riscrivere l'esercizio 2, utilizzando più funzioni combinate tra loro.
*/

function getNumber (text){

    let number = parseInt( prompt("Inserisci il " + text + " numero") );

    while( isNaN( number ) ) {
        number = parseInt( prompt("Inserisci il " + text + " numero") );
    }
    
    return number;
}

function getMathSymbol () {

    let mathSymbol = prompt("Quale operazione vuoi eseguire?\n+\n-\n*\n/");

    return mathSymbol;
}


function calculate2 (userNumber1, userNumber2, mathSymbol) {
    let result;
    
    //Evaluating
    switch (mathSymbol) {
        case "+" :
            result = userNumber1 + userNumber2;
            break;
        case "-" :
            result = userNumber1 - userNumber2;
            break;
        case "*" :
            result = userNumber1 * userNumber2;
            break; 
        case "/" :
            result = userNumber1 / userNumber2;
            break;
        default :
            result = "Operazione non possibile";
    }

    console.log(
    `
        Primo numero inserito: ${userNumber1}
        Secondo numero inserito: ${userNumber2}
        Operatore scelto: ${mathSymbol}
        Risultato: ${result}
    `
    )
}

const userNumber1 = getNumber("primo");
const userNumber2 = getNumber("secondo");
const mathSymbol = getMathSymbol();

//Invocation
calculate2(userNumber1, userNumber2, mathSymbol);

