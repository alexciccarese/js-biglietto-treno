/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

// richiesta Km
const km = Number(prompt("Quanti chilometri vuoi percorrere?"))
console.log(km);


// Età del passeggero
const età = Number(prompt("Quanti anni hai?"))
console.log(età);

// Prezzi
const prezzoKm = 0.212
console.log(prezzoKm);

let prezzoTotale = km * prezzoKm
console.log(prezzoTotale);

// Sconti
if (età < 18) {
  prezzoTotale = prezzoTotale * 0.8
  
} else if (età > 65) {
  prezzoTotale = prezzoTotale * 0.633
}
console.log(prezzoTotale)

// Prezzo in decimali
let prezzoFinale = prezzoTotale.toFixed(2)

// Mostra prezzo in alert
alert(`Il prezzo del tuo biglietto è: ${prezzoFinale} €`)
