
/**
 * Esta funcione determina el ganador
 * @param {Array<Number>} puntosJugadores es un array de number
 */
export const determinarGanador = (puntosJugadores) => {

    if (!puntosJugadores || puntosJugadores.length === 0) throw new Error('Los puntosJugadores son necesarios');

    const [puntosJugador, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if (puntosComputadora === puntosJugador) {
            alert('Empate!');
        } else if ((puntosComputadora < 21 && puntosComputadora > puntosJugador) || puntosJugador > 21) {
            alert('Computadora gana!');
        } else {
            alert('Jugador gana!');
        }
    }, 20);
}