// IMPORTACIONES
import { api_key, url_base_forecast } from '../constanst/api_url';
import transformForecast from '../services/transformForecast';

// Por convencion manejar en mayuscula el ID de las ACCIONES dentro de una constante
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
// Creamos un a funcion que sera el action creator que recibira del dispacher el valor actualizado
const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});

// Creamos una nueva accion con middewares, para hacer una peticion al API
export const setSelectedCity = payload =>{
    // MIDDEWARE: Son funciones que se ejecutan entre el dispatch de la accion y su nuevo estado. Estas funciones afectan la accion antes o despues de ser procesadas.

    return dispatch => {
        // Aqui hacemos la consulta al api con fetch o axios
        const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;  
        // Con dispatch, buscamos la informacion con la ciudad seleccionada
        dispatch(setCity(payload));
        
        // Se usa el return para que ejecute la consulta
        return fetch(url_forecast).then( 
            // Con este metodo convertimos la respuesta a JSON
            data => (data.json())
        ).then(
            wheader_data => {
                // Se crea una constante que va llamar el servicio de transformacion
                const forecastData = transformForecast(wheader_data);
                console.log(forecastData);

                // Modifica el estado si la consulta fue exitosa, actualizo ese estado con ciudad seleccionada y una array con sus datos
                dispatch(setForecastData({city: payload, forecastData}));
            }
        ).catch( err => console.log(err));        
    };
}