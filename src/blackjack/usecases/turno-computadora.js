import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./determinar-ganador";
import { pedirCarta } from "./pedir-carta";

/**
 * Esta funcion le da el turno a la computadora
 * @param {Array<number>} puntosJugadores es un array de number
 * @param {Array<string>} deck es un array de string
 */
export const turnoComputadora = (puntosJugadores, deck) => {

    if (!puntosJugadores) throw new Error('Los puntosJugadores son necesarios');
    if (!deck) throw new Error('El deck es necesario');

    let puntosComputadora = 0;
    const [puntosJugador] = puntosJugadores;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores)

        crearCarta(carta, puntosJugadores.length - 1);

    } while ((puntosComputadora < puntosJugador) && (puntosJugador <= 21));

    determinarGanador(puntosJugadores);

}