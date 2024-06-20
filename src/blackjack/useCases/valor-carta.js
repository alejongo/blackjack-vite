/**
 * 
 * @param {String} carta es la carta retornada de la función pedirCarta
 * @returns {Number} Retorna el valor en Número de la carta seleccionada
 */
export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}