// REDUX
// Importamos la funcion que crea el store
// Estos dos modulos adicionales applyMiddleware, compose nos permiten usar Middlewares
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// Importamos los reducers, para pasarlo como parametro al store
import reducers from '../reducers';

// Creamos la CONSTANTE que envocara el create store, que recibe como parametros una funcion REDUCER, y un estado por defecto
// Como segundo parametro enviamos el codigo necesario para crear habilitar el DevTools

// Creamos el stato inicial por defecto
const initialState = {
    city: 'Bogotá,col'
}

// Defino la constante que configura los middlewares
const composeEnheancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*Forma 2 de llamar la herramienta dev tools con middlewares */
export const store = createStore(reducers, initialState, composeEnheancers(applyMiddleware(thunk)));

/*Forma 1 de llamar la herramienta dev tools 
export const store = createStore(city, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());*/