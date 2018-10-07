/*  <form id="kalkulator">


      <input id='wplata' type="number" value="0" min="0" />
       <select id="okres-kapitalizacji">
        <option value="12">Miesięcznie</option>
        <option value="4">Kwartalnie</option>
        <option value="1">Rocznie</option>

      <input id="ilosc-lat" type="number" value="1" min="1" /

      <input id="oprocentowanie" type="number" value="0" />
      <input id="podatek" type="checkbox" 

      <button type="button" onclick="oblicz()">Oblicz</button>

  <div id="wynik"></div>*/

let wplata = document.getElementById("wplata");
let okresKapitalizacji =  document.getElementById("okres-kapitalizacji");
let iloscLat =  document.getElementById("ilosc-lat");
let oprocentowanie =  document.getElementById("oprocentowanie");
let podatek =  document.getElementById("podatek");
let button =  document.querySelector('button[type="button"]');
let wynik  =  document.getElementById("wynik");

let K; //K= K0 (1 + r/m)^(n*m)
let K0; //wartość wkładu pieniężnego - wplata
let r; //roczna stopa procentowa - oprocentowanieOpodatkowane
let m; //liczba okresów kapitalizacji - okresKapitalizacji
let n; //let r; //liczba lat – iloscLat

function pobierz () {
   K0 =  wplata.value;
   r = oprocentowanie.value;
   m = okresKapitalizacji[okresKapitalizacji.selectedIndex].value;
   n = iloscLat.value;
    console.log(K0, r, m, n);
    const odsetki = new KapitalizacjaOdsetek(K0,r,m,n);
    console.log(odsetki);
    console.log(odsetki.kapitalKoncowy);
} 

class KapitalizacjaOdsetek {
  constructor(K0,r,m,n) {
    this.K0 = K0;
    this.r= r;
    this.m = m;
    this.n= n;
  }
  get kapitalKoncowy() {
    return  K0 * Math.pow((1+r/100/m), n*m);
  }
}

button.addEventListener("click", function(e) {
   pobierz();
});


