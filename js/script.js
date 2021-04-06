/******************************************************************************
 * CAMPO MINATO
******************************************************************************/

//TASKS
//- Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
// - In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati la partita termina altrimenti continua chiedendo all’utente un altro numero.
// - La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// - Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var numeroMax;
var numeroBombe = 16;
var numeriUsati = [];
var numeriBombe = [];
var numeroUtente = 0;

//BONUS
var livello = prompt("Seleziona un livello di difficoltà:\nFacile\nMedio\nDifficile").toLowerCase().trim();
//Validazione livello
while(livello !== "facile" && livello !== "medio" && livello !== "difficile") {
    alert("Valore errato. Riprova");
    livello = prompt("Seleziona un livello di difficoltà:\nFacile\nMedio\nDifficile").toLowerCase().trim();
}

switch (livello) {
    case "facile":
        numeroMax = 100;
        break;
        case "medio":
            numeroMax = 80;
            break;
            case "difficile":
                numeroMax = 50;
}
            
var possibilita = numeroMax - numeroBombe;

// Creazione arrey bombe
while(numeriBombe.length < numeroBombe) {
    var numeroRandom = randNumb(1, numeroMax);
    if( !numeriBombe.includes(numeroRandom) ) {
        numeriBombe.push(numeroRandom);
    }

}
console.log(numeriBombe);

// LOOP GIOCO
while( (!numeriBombe.includes(numeroUtente)) && numeriUsati.length < possibilita) {
    numeroUtente = parseInt( prompt("Inserisci un numero da 1 a " + numeroMax + "\nHai totalizzato " + numeriUsati.length + " punti su " + possibilita).trim() );
    //Validazione numero utente
    while( isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > numeroMax) {
        numeroUtente = parseInt( prompt("Valore non valido \nInserisci un numero da 1 a " + numeroMax).trim() );
    }

    if( !numeriUsati.includes(numeroUtente) && !numeriBombe.includes(numeroUtente) ) {
        numeriUsati.push(numeroUtente);
    } else if ( numeriUsati.includes(numeroUtente) ){
        alert("Numero già usato.\nRiprova!");
    } else if ( numeriBombe.includes(numeroUtente) ) {
        alert("Hai perso :'(")
    }

    if(numeriUsati.length === possibilita) {
        alert("HAI VINTO!!!!!")
    }

}

console.log("Hai totalizzato " + numeriUsati.length + " punti su " + possibilita );
console.log("GAME OVER");

// UTILITIES
function randNumb(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}