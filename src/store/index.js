// REDUX
// Importamos la funcion que crea el store
import { createStore } from 'redux';


// Creamos la CONSTANTE que envocara el create store, que recibe como parametros una funcion REDUCER
// Como segundo parametro enviamos el codigo necesario para crear habilitar el DevTools
export const store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());