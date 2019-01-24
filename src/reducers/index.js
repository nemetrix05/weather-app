// El combina reducer nos ayuda a unir todo los reducer que estan dentro de la aplicacion, para asi pasar uno solo como parametro al createstore();

// Importante: Importar este modulo de redux
import { combineReducers } from 'redux';
// Importamos los reducer que hicimos por separado
import { city } from './city';
// Importamos del reducer cities getForecastDataFromCities como un alias para enviarlos los datos del state y asi enmarcarar los datos
import { cities, getForecastDataFromCities as _getForecastDataFromCities, getWheatherCities as _getWheatherCities } from './cities';

/*Instalamos la libreria Reselect, que se encargara de mejorar la presentacion y el proceso de carga de los selectores */
import { createSelector } from 'reselect';


// exportamos el metodo combine reducers 
export default combineReducers({
    // Aqui guardamos todos los reducers con los nombres de clave
    cities,
    city
});

// Exportamos la funcion que obtiene la ciudad actual para enviarla al connect
// Incorpramos el createselector el cual recibe como parametro una funcion que extrae el valor y por ultimo una funcion final que recibe el resultado de la anterior que es este caso es city.
export const getCity = createSelector(state => state.city, city => city);

// Con la primera funcion envocamos la original de cities que tiene guin bajo y le pasamos los parametros que necesita
export const getForecastDataFromCities = createSelector(state => state.cities, getCity, _getForecastDataFromCities);

export const getWheatherCities = createSelector( state => state.cities, _getWheatherCities );