/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I tipi di dati vengono utilizzati per classificare un particolare tipo di dati nei linguaggi di programmazione. Ad esempio,
un numero e una stringa di caratteri sono diversi tipi di dati che vengono trattati in modo diverso da Javascript.
Abbiamo diversi tipi di dati tra cui: numeri, stringhe, valori booleani, null, undfield */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var name = 'Sabino';
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var x = 12;
var y = 20;
console.log(x + y);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var name = 'Orbello';
const cognome = 'Orbello'
/**const cognome = 'Dambrosio'/** in questo caso Orbello non può essere riscritto in Dambrosio perchè non posso riassegnare un valore alla variabile const*/
console.log(cognome)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

var x = 12;
var y = 4;
console.log(y - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = 'john';
var name2 = 'John';

console.log(name1 != name2) /**in questo caso mi da valore=true perchè name1 è diverso da name2(perchè name2 e scritto con la lettera iniziale maiuscola) */
name1 = name1.toLowerCase();
name2 = name2.toLowerCase();/*in questo caso la loro ugualianza è diventata true perchè entrambe sono state trasformate in lowercase(entrambe in piccolo)*/

