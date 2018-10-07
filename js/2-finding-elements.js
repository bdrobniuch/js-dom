/*wyszukiwanie po id*/
const toDoList = document.getElementById("to-do-list");

console.log(toDoList);
console.dir(toDoList);

/*wyszukiwanie po klasie*/

const listItems = document.getElementsByClassName("to-do-item");

/*wyszukiwanie po znaczniku*/
const heading = document.getElementsByTagName("h1");
console.log(heading);

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = i + "em";
}


/*wyszukiwanie po selektorach
dokladnie tak jak w csss*/

const firstListItem = document.querySelector("#to-do-list .to-do-item");
console.log(firstListItem);


const ListItemAll = document.querySelectorAll("#to-do-list .to-do-item:nth-of-type(even)");
console.log(ListItemAll);