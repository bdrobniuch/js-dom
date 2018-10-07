const heading = document.querySelector("h1");
console.dir(heading);

//heading.onclick= (()=> this.innerText = "fdfdf");
heading.onclick=function(){this.innerText = "KLIKNIETY1";};
//heading.onclick=(e)=>{console.log(e.target);};
//heading.innerText  = "dsfsdf";


heading.className = "new-class";

const listItem = document.querySelector("li");

listItem.classList.add("first-element");
listItem.classList.remove("to-do-item");
listItem.style.backgroundColor=("red");