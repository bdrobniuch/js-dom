let persons = {
    "osoby": [
        {
            imie: "Krystian",
            nazwisko: "Dziopa",
            wzrost: 180,
            oczy: "niebieskie",
            zainteresowania: [
                {
                    nazwa: "podroze"
                },
                {
                    nazwa: "gotowanie"
                }
             ]
         },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                {
                    nazwa: "gotowanie"
                },
                {
                    nazwa: "języki"
                }
             ]
         },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                {
                    nazwa: "programowanie"
                },
                {
                    nazwa: "podroze"
                },
                {
                    nazwa: "języki"
                }
             ]

         }
     ]
}

/* napisz funkcje, ktora jako parametr przyjmuje obiekt z danymi osob i 

wypisuje z konsoli nastepujace informacje
Uzyktownik xxx-imie ma xxx wzrostu */
console.log(persons);

function wyswietl(p) {
    const header = document.createElement("h2");
    const parText = document.createTextNode("Header 2 ");
    header.appendChild(parText);
    document.body.appendChild(header);

    const list = document.createElement("ul");
    document.body.appendChild(list);


    p.osoby.forEach((person) => {
        const listItem = document.createElement("li");
        
        
        const parText = document.createTextNode(person.nazwisko + " "+ person.imie);
        listItem.appendChild(parText);
        list.appendChild(listItem);
    });
}

wyswietl(persons);
