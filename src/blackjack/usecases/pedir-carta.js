
/**
 * Esta función permite tomar una carta del deck
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna la carta del deck
 */

export const pedirCarta = (deck) => {

    if (!deck) throw new Error('El deck es necesario');

    if (!deck || deck.length === 0) throw new Error('No hay cartas en el deck');

    return deck.pop();

}