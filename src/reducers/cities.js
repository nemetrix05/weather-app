import { SET_FORECAST_DATA, GET_WEATHER_CITY, SET_WEATHER_CITY } from '../actions';
/*Instalamos la libreria Reselect, que se encargara de mejorar la presentacion y el proceso de carga de los selectores */
import { createSelector } from 'reselect';
import toPairs from 'lodash.topairs';

// Hacemos el reducer para manejar el estado de Data Forecast Extended
export const cities = (state = {}, action) => {
    switch(action.type) {
        // Usamos llaves para que permita usar las constantes
        case SET_FORECAST_DATA: {
            // Filtramos los datos recibidos en la accion 
            const { city, forecastData } = action.payload;
            // hacemos la copia del state actual, y generamos el nuevo con: [llaveciudad elegida], datosforecast y wheader
            // al agregar ...state[city], mantenenos el estado anterior de wheater y solo cambia el de forecastdata

            // con el data date, comparamos la fecha de cambio de los datos para no hacer un nuevo renderizado cada vez que se consulta

            return {...state, [city]: { ...state[city], forecastData, forecastDataDate: new Date() }}
        }
        case GET_WEATHER_CITY: {
            const city = action.payload;
            return {...state, [city]: { ...state[city], wheather: null } }
        }
        case SET_WEATHER_CITY: {
            const { city, wheather } = action.payload;
            return {...state, [city]: { ...state[city], wheather }}
        }
        default:
            return state;
    }
}

// Selectores de primer nivel: Son funciones que se encargan de filtrar o seleccionar una parte especifica del state, en este caso solo queremos seleccionar los datos por cada ciudad.

// Recibe como parametros las propiedades del reducer.
export const getForecastDataFromCities = createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData);


// En esta funcion extraemos de la data los cambios de ciudad y wheader y los convertimos a una array
const fromObjToArray = cities => (toPairs(cities).map(([key, value]) => ({ key, name: key, data: value.wheather })));

// Usamos la libreria LODASH, que permite procesar los datos que esten en Array, Object, etc.
export const getWheatherCities = createSelector(state => fromObjToArray(state), cities => cities);