/*TWorzenie elementow */

const listHeading = document.createElement("h2");
console.log(listHeading);
const headingText = document.createTextNode("Naglowek");
console.log(headingText);
listHeading.appendChild(headingText);

console.log(listHeading);

const toDoList = document.getElementById("to-do-list");
toDoList.appendChild(listHeading);

const listParagraph = document.createElement("p");
const parText = document.createTextNode("trssc paragrafu ");

listParagraph.appendChild(parText);

listParagraph.setAttribute("id", "new-par");

toDoList.parentElement.insertBefore(listParagraph, toDoList);

/*Usuwanie wezlow*/
document.body.removeChild(document.querySelector("h1"));


