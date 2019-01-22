// Importamos las acciones, para validarlas en el reducer y devolver el estado de acuerdo a la accion realizada.
import { SET_CITY } from '../actions';

// Los reducers son funciones puras que reciben dos parametros: State Inicial y la accion. El retornara el nuevo state.
// El valor de la accion por convencion deberia llamarse payload
// con esta funcion: state = {}: definimos un stado inicial de la aplicacion
// Con el ...state. hacemos un desglose de las propiedades del state inicial.

export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
            return action.payload;
        default:
            return state;
    }
}