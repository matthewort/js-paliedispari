// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var inputPariDispari = prompt("scegli pari o dispari");


var inputUnoCinque = prompt("inserisci un numero da 1 a 5");
console.log(inputUnoCinque); // numero che inserisco io
console.log(numeroRandom(inputUnoCinque)); // numero che inserisce il computer
console.log(somma(inputUnoCinque));
console.log(risultato(inputUnoCinque));


// funzione per generare numeri random
function numeroRandom(max) {
return Math.floor(Math.random() * 5) + 1;
}

// funzione per far ritornare se la somma è pari o dispari
function somma(sum) {
var somma = "";
somma = somma + inputUnoCinque + numeroRandom(inputUnoCinque);
return somma;
}

// funzione se è pari o dispari
function risultato(result) {
if (somma % 2 == 0) {
return console.log("il risultato è pari")
} else {
  return console.log("il risultato è dispari")
}
}
