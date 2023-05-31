import _ from 'underscore';
import { acumularPuntos, crearCarta, crearDeck, pedirCarta, turnoComputadora } from './usecases';

let deck = [];
const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'K', 'Q'];

let puntosJugadores = [];

//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugadores = document.querySelectorAll('.divCartas'),
    puntosHTML = document.querySelectorAll('small');

//Esta funcion inicializa el juego
const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos,
        especiales);
    puntosJugadores = [];
    btnPedir.disabled = false;
    btnDetener.disabled = false;

    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
        puntosHTML[i].innerText = 0;
        divCartasJugadores[i].innerHTML = '';
    }
}

//Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck),
        puntosJugador = acumularPuntos(carta, 0, puntosJugadores);

    crearCarta(carta, 0);

    if (puntosJugador > 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores, deck);
    } else if (puntosJugador === 21) {
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores, deck);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores, deck);
});

btnNuevo.addEventListener('click', () => {
    inicializarJuego();

})