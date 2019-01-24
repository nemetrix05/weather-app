// IMPORTACIONES
import { api_key, url_base_forecast } from '../constanst/api_url';
import transformForecast from '../services/transformForecast';
// Importamos la funcion para obtener el api con la ciudad.
import getUrlByCity from '../services/getWeatherCity';
// Importamos el servicio que transforma los datos
import transformWeather from '../services/transformWeather';

// Por convencion manejar en mayuscula el ID de las ACCIONES dentro de una constante
export const SET_CITY           = 'SET_CITY';
export const SET_FORECAST_DATA  = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY   = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY   = 'SET_WEATHER_CITY';
// Creamos un a funcion que sera el action creator que recibira del dispacher el valor actualizado
const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload});

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

                // Modifica el estado si la consulta fue exitosa, actualizo ese estado con ciudad seleccionada y una array con sus datos
                dispatch(setForecastData({city: payload, forecastData}));
            }
        ).catch( err => console.log(err));        
    };
}

// Accion para obtener los datos del wheater con redux-thunk
export const setWeather = payload => {

    return dispatch => {
        // con los datos que me llegan por payload, itero sobre los elementos haciendo una consulta al api por cada uno
        payload.forEach(city => {
            // creamos una constante para llamar la funcion del api
            dispatch(getWeatherCity(city));
            const api_weather = getUrlByCity(city);           

            // Se hace el fetch en el momento de envocar alguna funcion o en el ciclo de vida
            fetch(api_weather).then( (data) => {
                // Como el servidor nos responde no en formato JSON, entonces debemos convertirla a json y esto crea una nueva promesa
                return data.json();
            }).then( (weather_data) =>{
                const wheather = transformWeather(weather_data);
                // Paso el wheader obtenida a la accion
                dispatch(setWeatherCity({city, wheather}));
            });
        })
    }
}