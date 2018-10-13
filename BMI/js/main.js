class BMI {
    constructor(waga, wzrost) {
        this.waga = waga;
        this.wzrost = wzrost;
    }

    get fBMI() {
        return this.waga / Math.pow(this.wzrost, 2);
    }

    get BMIinfo() {

        if (this.fBMI < 16) return "wygłodzenie";
        else
        if (this.fBMI < 17) return "wychudzenie";
        else
        if (this.fBMI < 18.5) return "niedowaga";
        else
        if (this.fBMI < 25) return "wartość prawidłowa";
        else
        if (this.fBMI < 30) return "nadwaga";
        else
        if (this.fBMI < 35) return "I stopień otyłości";
        else
        if (this.fBMI < 40) return "II stopień otyłości";
        else
            return "otyłość skrajna";

    }


}




/*
mniej niż 16 - wygłodzenie
16 - 16.99 - wychudzenie
17 - 18.49 - niedowaga
18.5 - 24.99 - wartość prawidłowa
25 - 29.99 - nadwaga
30 - 34.99 - I stopień otyłości
35 - 39.99 - II stopień otyłości
powyżej 40 - otyłość skrajna
*/

/*Obsluz zdarzenie wyslania formularz. Zablokuj wysylaie formularza i wyswietl w konsoli wartosc pol waga i wzrost*/

let form = document.getElementById("bmi-form");
let iweight = document.getElementById("weight");
let iheigth = document.getElementById("heigth");
let output = document.getElementById("result");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let weight = Number(iweight.value);
    let heigth = Number(iheigth.value);
    console.log(weight);
    console.log(heigth);
    
    
    let kalkulator = new BMI(weight, heigth);

    output.innerText = `Wartosc twojego BMI to ${kalkulator.fBMI} co oznacza ${kalkulator.BMIinfo}`;
    //        nameAlert.style.display = name.value ? "none" : "block";
    //        emailAlert.style.display = email.value ? "none" : "block";
    //        checkerAlert.style.display = checkbox1.checked ? "none" : "block";
});
