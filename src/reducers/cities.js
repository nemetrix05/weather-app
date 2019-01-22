import { SET_FORECAST_DATA } from '../actions';

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