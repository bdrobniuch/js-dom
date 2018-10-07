function ustawTlo (e) {
    console.log(this);
    if (this.id == "p1"){
       this.style.backgroundColor = "red"; 
    } else{
        this.style.backgroundColor = "yellow";
    }
    
}

document.getElementById("p1").addEventListener("click", ustawTlo);
document.getElementById("p2").addEventListener("click", ustawTlo);