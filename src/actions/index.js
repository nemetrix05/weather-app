// Por convencion manejar en mayuscula el ID de las ACCIONES dentro de una constante
export const SET_CITY = 'SET_CITY';
// Creamos un a funcion que sera el action creator que recibira del dispacher el valor actualizado
export const setCity = payload => ({ type: SET_CITY, payload });