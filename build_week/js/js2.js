// funzione per selezionare e deselezionare le stelle

const illuminaStelle = function () {
    const stelle = document.querySelectorAll('svg'); // seleziona tutti i tag svg (stelle)

    stelle.forEach((element, index) => { // per ogni stella aggiungiamo un attributo valore (la prima avrà 1, la seconda 2, ecc)
        let value = index + 1;
        element.setAttribute('data-value', `${value}`);

        // ad ogni stella aggiungiamo un addeventListener al click con una funzione
        element.addEventListener('click', function () {
            // Remove 'illuminaStelle' class from all stars
            stelle.forEach((element, index) => {
                if (index < value) { // se la stella cliccata ha un valore (value) minore delle stelle accese
                    element.classList.add('illuminaStelle'); // accendi tutte le stelle con valore minore
                } else {
                    element.classList.remove('illuminaStelle'); // altrimenti spegne tutte le stelle con valore maggiore
                }
            });
            
        });
    });
}
illuminaStelle()