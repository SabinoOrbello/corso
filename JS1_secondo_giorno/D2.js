/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/ //due variabili da confrontare (if else if else)

var num1 = 9;
var num2 = 8;

if(num1 > num2){
  console.log("giusto")
}
else{
  console.log("sbagliato")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/// !==

var num1 = 7;
if(num1 !== 5){
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var num1 = 10;

if(num1 / 5){
  console.log("divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

var num1 = 4;
var num2 = 8;

if(num1 || num2 == 8){
  console.log("giusto");
}
else if(num1 + num2 ==8){
  console.log("sbagliato")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/// dichiaro 3 variabili: totale spesa, costo, pagamento totale

var totalShoppingCart = 55;
var costo = 10;
if(totalShoppingCart > 50){
  costo = 0;
}
var costoTotale = totalShoppingCart + costo;
console.log("Totale da addebitare all'utente" + costoTotale);


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/// sconto * 0.8

var costo = 10;
var totaleSpesa = 20;
var totalShoppingCart = 30;

if(totalShoppingCart > 50){
  console.log("spedizione gratuita")
}
else{
  console.log("addebito di euro 40")
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let numero1 = 10;
let numero2 = 5;
let numero3 = 7;

// Blocco condizionale per ordinarle
if (numero1 >= numero2 && numero1 >= numero3) {
  if (numero2 >= numero3) {
    console.log(numero1, numero2, numero3);
  } else {
    console.log(numero1, numero3, numero2);
  }
} else if (numero2 >= numero1 && numero2 >= numero3) {
  if (numero1 >= numero3) {
    console.log(numero2, numero1, numero3);
  } else {
    console.log(numero2, numero3, numero1);
  }
} else {
  if (numero1 >= numero2) {
    console.log(numero3, numero1, numero2);
  } else {
    console.log(numero3, numero2, numero1);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

var num1 = 2;
if(num1 === typeof NaN){
  console.log("si")
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*///modulo di 2 (%2) if else

var x = 10;

if(x%2 == 0){
  console.log("è pari")
}
else{
  console.log("è dispari")
}

 //*ESERCIZIO 10
 // Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*//
  
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*///siamo dentro un oggetto e dobbiamo aggiungere dentro un oggetto

let me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

var numeri =[];
numeri.num1 =1;
numeri.num2 =2;
numeri.num3 =3;
numeri.num4 =4;
numeri.num4 =5;
numeri.num6 =6;
numeri.num7 =7;
numeri.num8 =8;
numeri.num9 =9;
numeri.num10 =10;
console.log(numeri)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

