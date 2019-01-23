import { SET_FORECAST_DATA } from '../actions';
/*Instalamos la libreria Reselect, que se encargara de mejorar la presentacion y el proceso de carga de los selectores */
import { createSelector } from 'reselect';

// Hacemos el reducer para manejar el estado de Data Forecast Extended
export const cities = (state = {}, action) => {
    switch(action.type) {
        case SET_FORECAST_DATA:
            // Filtramos los datos recibidos en la accion 
            const { city, forecastData } = action.payload;
            // hacemos la copia del state actual, y generamos el nuevo con: [llaveciudad elegida], datosforecast y wheader
            return {...state, [city]: { forecastData }}
        default:
            return state;
    }
}

// Selectores de primer nivel: Son funciones que se encargan de filtrar o seleccionar una parte especifica del state, en este caso solo queremos seleccionar los datos por cada ciudad.

// Recibe como parametros las propiedades del reducer.
export const getForecastDataFromCities = createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData);