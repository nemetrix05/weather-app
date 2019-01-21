// REDUX
// Importamos la funcion que crea el store
import { createStore } from 'redux';
// Importamos los reducers, para pasarlo como parametro al store
import { city } from '../reducers/city';

// Creamos la CONSTANTE que envocara el create store, que recibe como parametros una funcion REDUCER, y un estado por defecto
// Como segundo parametro enviamos el codigo necesario para crear habilitar el DevTools

// Creamos el stato inicial por defecto
const initialState = {
    city: 'Bogotá'
}

export const store = createStore(city, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());