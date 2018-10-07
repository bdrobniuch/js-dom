function changeBck(e) {
    this.style.backgroundColor = 'red';
    console.log((e));
}

//document.querySelector("h1").onclick = changeBck;

document.querySelector("h1").addEventListener("click", changeBck);
//document.querySelector("h1").addEventListener("click",function () {window.location.href = "https://google.com"});
document.querySelector("ul").addEventListener("click", function () {
    this.style.backgroundColor = "yellow";
    document.querySelector("h1").removeEventListener("click", changeBck);
});

document.querySelector("a").addEventListener("click", function(e) {
    e.preventDefault();
//    console.div( e.target);
    window.setTimeout(function() {window.location.href = e.target.href}, 3000);
    this.style.color = "green";
})

/*Pro[pagacja zdarzen*/
document.querySelector("h3").addEventListener("click", function(e) {
    e.stopPropagation();
    this.style.backgroundColor = "pink";
})

document.querySelector("section").addEventListener("click", function() {
    this.style.backgroundColor = "orange";
})

let pole = document.querySelector("div");
pole.style.background.color = "silver";
console.dir(pole);
//pole.clientHeight =400px;
//pole.clientWidth= 400px;


