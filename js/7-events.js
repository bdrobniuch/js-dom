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
