// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let kmPercorsi = prompt ('quanti km percorerrai?')
console.log (kmPercorsi);

let eta = prompt ('quanti hanni hai?')
console.log (eta)

let PriceKm = 0.21

let ParzialPrice = (kmPercorsi * PriceKm)
console.log (ParzialPrice)

if (eta < 18){

    ParzialPrice = ( ParzialPrice * 0.8 )
}
else if (eta > 65) {

    ParzialPrice = (ParzialPrice * 0.6)

}

ParzialPrice = ParzialPrice.toFixed (2);

document.getElementById('prezzo') .innerHTML = `il tuo prezzo è ${ParzialPrice}£`