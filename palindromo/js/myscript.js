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
