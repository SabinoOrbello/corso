/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];
for(let i =0; i<pets.length;i++){
  console.log(pets[i]);
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
for(let i =0; i<pets.length;i++){
 pets.sort();
 console.log(pets[i]);
};

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
let animali2 = pets.reverse();
console.log(animali2);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/


 pets.shift();
console.log(pets);

pets.push("redfish");
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
/*esercizio 5 */

cars [0].licensePlate ='ba565bgu';
cars [1].licensePlate ='ba9887nmu';
cars [2].licensePlate ='ba677nlu';
let targa = cars;
console.log(targa);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({brand:"Jeep", model:"Renegade", color:"Black",trims:["allure","berlin","cabrio"], licensePlate:"ba574nm"});
console.log(cars);


let trims = [['titanium','st','active'],['allure','gt'],['life','style','r-line'],['allure','berlin','cabrio']];
trims.forEach(trims =>{
  trims.pop();
});

console.log(trims);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
justTrims.push(cars[0].trims[0]);
justTrims.push(cars[1].trims[0]);
justTrims.push(cars[2].trims[0]);
justTrims.push(cars[3].trims[0]);
console.log(justTrims);



/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

  for(let i=0; i<cars.length;i++){
    let colore = cars[i];
if(colore.color[0]=== "b"){
  console.log("fizz");
} else{
  console.log("Buzz");
}
  };
  
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let i =0;

while(i<numericArray.length){
  numericArray.splice(14);
console.log(numericArray[i]);
  i++;}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];

const posizioneArray = [];

for (let i = 0; i < charactersArray.length; i++) {
const character = charactersArray[i];

switch (character) {
case 'a':
posizioneArray.push(0);
break;
case 'b':
posizioneArray.push(1);
break;
case 'c':
posizioneArray.push(2);
break;
case 'd':
posizioneArray.push(3);
break;
case 'e':
posizioneArray.push(4);
break;
case 'f':
posizioneArray.push(5);
break;
case 'g':
posizioneArray.push(6);
break;
case 'h':
posizioneArray.push(7);
break;
case 'i':
posizioneArray.push(8);
break;
case 'j':
posizioneArray.push(9);
break;
case 'k':
posizioneArray.push(10);
break;
case 'l':
posizioneArray.push(11);
break;
case 'm':
posizioneArray.push(12);
break;
case 'n':
posizioneArray.push(13);
break;
case 'o':
posizioneArray.push(14);
break;
case 'p':
posizioneArray.push(15);
break;
case 'q':
posizioneArray.push(16);
break;
case 'r':
posizioneArray.push(17);
break;
case 's':
posizioneArray.push(18);
break;
case 't':
posizioneArray.push(19);
break;
case 'u':
posizioneArray.push(20);
break;
case 'v':
posizioneArray.push(21);
break;
case 'w':
posizioneArray.push(22);
break;
case 'x':
posizioneArray.push(23);
break;
case 'y':
posizioneArray.push(24);
break;
case 'z':
posizioneArray.push(25);
break;
default:
break;
}
}

console.log(posizioneArray);