/*
Esercizio 1
Scrivere un piccolo script javascript che inverta un array senza utilizzare il metodo reverse().
*/

//Original Array
let names = ["Marica", "Elisabetta", "Giulio", "Gianni", "Anna", "Marco"];

//Array with no elements
let reverseNames = [];

//Iterate over the original array in reverse order
for( let i = names.length - 1; i >= 0; i-- ){
    reverseNames.push(names[i]);
}

//Output
console.log(names);
console.log(reverseNames);


/*
Esercizio 2
Dato un array di numeri, stampare il velore minimo e massimo
*/

//Create Array
let numbers = [22, 13, 5, 27, -1, 0, 18, 1, 100, 367, 6, -4];

//Static minimum element
let minNumber = numbers[0];

//Static maximum element
let maxNumber = numbers[0];

//Getting minimum element of array numbers
for( let number of numbers ){
    if( minNumber > number ){
        minNumber = number;
    }
}

//Getting maximum element of array numbers
for( let number of numbers ){
    if( maxNumber < number ){
        maxNumber = number;
    }
}

//Output
console.log(numbers);
console.log(`Il valore minimo è: ${minNumber}`);
console.log(`Il valore massimo è: ${maxNumber}`);