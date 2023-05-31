
const divCartasJugadores = document.querySelectorAll('.divCartas');

/**
 * Esta funciones dibuja la carta en el html
 * @param {string} carta es un string
 * @param {number} turno es un number
 */
export const crearCarta = (carta, turno) => {

    if (!carta) throw new Error('La carta es necesaria');
    if (!turno) throw new Error('El turno es necesario');
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}