/*
Esercizio 1
Sulla base della lezione del giorno, costruire una array di oggetti, in cui ognuno di essi debba avere almeno un id e un titolo come chiavi. La seguente lista deve essere renderizzata sul DOM e non su console.log. Attenzione: non scrivere in modo statico alcun elemento (il body della pagina HTML sarà vuoto)
*/

const vehicles = [
    {
        id: crypto.randomUUID(),
        title: "Car 🚗"
    },
    {
        id: crypto.randomUUID(),
        title: "Bike 🚲"
    },
    {
        id: crypto.randomUUID(),
        title: "Airplane ✈️"
    },
    {
        id: crypto.randomUUID(),
        title: "Train 🚉"
    }
];

const ul = document.createElement("ul");

vehicles.forEach((item) => {
    const listVehicles = document.createElement("li");

    listVehicles.textContent = item.title;

    ul.appendChild(listVehicles);
})

document.body.appendChild(ul);


/*
Avanzato
Realizzare una todo-list che permetta all'utente di aggiungere e rimuovere elementi dalla lista. Per trarre ispirazione, o modello da copiare, seguire uno dei seguenti https://dribbble.com/search/shots/popular/mobile?q=todo-list
*/