/*
Esercizio 1
Supponiamo di avere un array con le seguenti informazioni: nome, cognome e paese di origine di una persona.

let persona = ["Mario", "Rossi", "Italia"];

Usando il destructuring, crea tre variabili separate (nome, cognome e paese) a partire dall'array "persona".
*/

const person = ["Fabio", "Ferrari", "Italia"];

const [name, surname, country] = person;

console.log(`Mi chiamo ${name} ${surname} e sono nato in ${country}`);


/*
Esercizio 2
Supponiamo di avere un oggetto che rappresenta un libro con le seguenti proprietà: titolo, autore e anno di pubblicazione.

  titolo: "Il Nome della Rosa",
  autore: "Umberto Eco",
  anno: 1980
};
Usando il destructuring, crea tre variabili separate (titolo, autore, anno) a partire dall'oggetto "libro".
*/

const book = {
    title: "The Decameron",
    author: "Giovanni Boccaccio",
    year: 1349,
}

const { title, author, year } = book;

console.log(`${title} scritto da ${author} nel ${year} è considerato una delle opere più importanti.`)

/*
Avanzato 1
In entrambi gli esercizi 1 e 2, se i dati non sono disponibili, impostare un valore di default per le variabili mancanti. Ad esempio, se l'array "persona" non contiene il paese, impostare il paese come "Non specificato". Allo stesso modo, se l'oggetto "libro" non contiene l'anno di pubblicazione, impostare l'anno come "Non specificato".
*/

const secondPerson = ["Thomas", "Goetz"];

const [namePerson, surnamePerson, countryPerson = "not specified"] = secondPerson;

console.log(`Mi chiamo ${namePerson} ${surnamePerson} e sono nato in ${countryPerson}`);


const secondBook = {
    titleBook: "The Stranger",
    authorBook: "Albert Camus",
}

const { titleBook, authorBook, yearBook = "not specified" } = secondBook;

console.log(`${titleBook} scritto da ${authorBook} nel ${yearBook} è considerato uno dei romanzi più importanti.`)


