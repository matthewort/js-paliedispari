// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var inputUser = prompt("inserisci una parola");
console.log(verificaPalindromo(inputUser));

// definisco funzione
function verificaPalindromo(parola) {

  var pali = parola.split("").reverse().join("");

  if (parola === pali) {
    return "la parola inserita è palindroma";
  } else {
    return "la parola inserita non è palindroma";
  }
}


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
