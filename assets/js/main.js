
//età: chiedere all'utente con due prompt gli anni di due persone e
var age_1 = parseInt(prompt('Player 1 Age:'));
var age_2 = parseInt(prompt('Player 2 Age:'));
var message = document.getElementById('msg');

//comunicare quale delle due è più grande
if (age_1 > age_2) {
    message.innerHTML = "Player 1 is older than player 2"
    console.log("Player 1 is older than player 2");
} else if (age_2 > age_1) {
    message.innerHTML = "Player 2 is older than player 1"
    console.log('Player 2 is older than player 1')
} else {
    message.innerHTML = "Both players have the same age"
    console.log("Both players have the same age")
}

//quanto manca: utilizzando le funzioni dell'oggetto Date, stabilire l'ora attuale
var d = new Date()
var minutes = d.getMinutes()

//attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.

var missingMinutes = 60 - minutes;
console.log(missingMinutes);