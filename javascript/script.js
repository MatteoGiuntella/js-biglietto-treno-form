// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// let kmPercorsi = document.getElementById ('validationDefault01').value;
// console.log (kmPercorsi);

let calcola = document.getElementById ('genera');
calcola.addEventListener ('click',function(){

    let identita = (document.getElementById ('nomecognome').value);
    console.log ('identita', identita , typeof identita);

    let eta = parseInt(document.getElementById ('anni').value);
    console.log ('eta', eta , typeof eta);

    let destinazione = (document.getElementById ('destinazione').value);
    console.log ('destinazione', destinazione , typeof destinazione);

    let kmPercorsi = parseInt(document.getElementById ('km').value);
    console.log ('kmPercorsi', kmPercorsi , typeof kmPercorsi);

    let entita = (document.getElementById ('fascia').value);
    console.log ('entita', entita , typeof entita);

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
    
    document.getElementById('datiNM').innerHTML = (identita);

    document.getElementById('price').innerHTML = (ParzialPrice);

    document.getElementById("carrozza").innerHTML = Math.floor(Math.random(1) * 10);

    document.getElementById("nmrviaggio").innerHTML = Math.floor(Math.random(10000) * 100000);
})




