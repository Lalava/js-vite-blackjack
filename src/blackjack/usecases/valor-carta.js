
/**
 * Esta función obtiene el valor de la carta
 * @param {string} carta es un string
 * @returns {Number} retorna el valor de la carta
 */
export const valorCarta = (carta) => {

    if (!carta) throw new Error('La carta es necesaria');

    const valor = carta.substring(0, carta.length - 1);

    return (!isNaN(valor)) ? parseInt(valor) :
        (valor === 'A') ? 11 : 10
}