/*Wezel rodzica*/

const listItemParent = document.querySelector(".to-do-item");
console.log(listItemParent.parentElement);

/*Węzeł dzieci*/
const toDoList = document.getElementById("to-do-list");
console.log(toDoList.children);
console.log(toDoList.childNodes); //komentarze tekst wewnatrz znacznika itd.

toDoList.lastElementChild.style.backgroundColor = "#aabbcc";

/*elementy rodzenstwa*/
toDoList.previousElementSibling.style.color = "blue";

toDoList.children[2].nextElementSibling.style.color = "red";