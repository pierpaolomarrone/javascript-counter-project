# THE SPACE COUNTER 🌌

## Descrizione del Progetto

"The Space Counter" è un semplice contatore interattivo a tema spaziale, sviluppato come progetto per mettere in pratica le basi di HTML, CSS e, soprattutto, JavaScript. L'applicazione permette agli utenti di incrementare, decrementare un valore numerico, resettare il contatore e personalizzare il colore di sfondo del pannello del contatore.

L'obiettivo principale di questo progetto è stato quello di familiarizzare con la manipolazione del DOM, la gestione degli eventi e l'utilizzo del `localStorage` per la persistenza dei dati lato client.

---

## Tecnologie Utilizzate 🛠️

* **HTML5:** Per la struttura semantica della pagina.
* **CSS3:** Per lo styling, inclusi effetti di transizione, `text-shadow`, `box-shadow` e un layout responsivo tramite media query.
    * Font: [Orbitron (Google Fonts)](https://fonts.google.com/specimen/Orbitron) per un feeling futuristico.
* **JavaScript (ES6+):** Per tutta la logica dell'applicazione, la creazione dinamica degli elementi dell'interfaccia e la gestione delle interazioni utente.

---

## Funzionalità ✨

* **Conteggio:** Pulsanti dedicati per incrementare (`+`) e decrementare (`−`) il valore visualizzato.
* **Reset:** Un pulsante per riportare il contatore al valore iniziale (0).
* **Cambio Colore Sfondo:** Un selettore colore (`<input type="color">`) permette di cambiare dinamicamente il colore di sfondo del box del contatore.
* **Persistenza Dati:**
    * Il valore corrente del contatore viene salvato nel `localStorage` del browser, così da essere mantenuto tra le sessioni.
    * Anche il colore di sfondo scelto viene salvato nel `localStorage`.

---

## Logica JavaScript Principale (in `assets/js/script.js`)

L'intero script è racchiuso in un event listener `DOMContentLoaded` per assicurare che il DOM sia completamente caricato prima dell'esecuzione.

1.  **Inizializzazione:**
    * Recupero dei valori di `counterValue` e `appBackgroundColor` dal `localStorage`. Se non presenti, vengono usati valori di default.
    * Applicazione immediata del colore di sfondo recuperato.

2.  **Creazione Dinamica del DOM:**
    * Gli elementi dell'interfaccia (display del contatore, pulsanti `+`, `−`, `Reset`, etichetta e input per il cambio colore) sono creati e aggiunti dinamicamente al `div#app` tramite JavaScript. Questo mantiene il file `index.html` più pulito e la logica di costruzione dell'UI centralizzata nello script.

3.  **Gestione Eventi:**
    * **Pulsanti Incremento/Decremento:** Modificano la variabile `counterValue` e chiamano `updateCounterDisplay()`.
    * **Pulsante Reset:** Imposta `counterValue` a `0` e chiama `updateCounterDisplay()`.
    * **Selettore Colore (`input` event):** Aggiorna lo stile `backgroundColor` del contenitore `#app` e salva il nuovo colore nel `localStorage`.

4.  **Funzione `updateCounterDisplay()`:**
    * Aggiorna il `textContent` dell'elemento display con il `counterValue` attuale.
    * Salva il `counterValue` corrente nel `localStorage` per la persistenza.

---

