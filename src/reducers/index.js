// El combina reducer nos ayuda a unir todo los reducer que estan dentro de la aplicacion, para asi pasar uno solo como parametro al createstore();

// Importante: Importar este modulo de redux
import { combineReducers } from 'redux';
// Importamos los reducer que hicimos por separado
import { city } from './city';
import { cities } from './cities';

// exportamos el metodo combine reducers 
export default combineReducers({
    // Aqui guardamos todos los reducers con los nombres de clave
    cities,
    city
});