import { valorCarta } from "./valor-carta";

const puntosHTML = document.querySelectorAll('small');

/**
 * Esta función acumula los puntos de los jugadores
 * @param {String} carta es un string
 * @param {Number} turno es un number
 * @param {Array<Number>} puntosJugadores es un array de number
 * @returns {Number} retorna un number
 */
export const acumularPuntos = (carta, turno, puntosJugadores) => {

    if (!carta) throw new Error('La carta es necesaria');
    if (!turno) throw new Error('El turno es necesario');
    if (!puntosJugadores || puntosJugadores.length === 0) throw new Error('Los puntosJugadores son necesarios');

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
}