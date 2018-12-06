// Importamos las constantes con los datos para procesar el api
import { api_key, url_base_api } from '../constanst/api_url';


const getUrlByCity = city => {
    // concatenamos todo la consulta en una constante para pasarla al metodo fecth
    // Para que convierta la temperatura, usamos el parametro extra en la documentacion del api &units=metric

    // o por medio de un plugin: npm install --save convert-units    
    return ( `${url_base_api}?q=${city}&appid=${api_key}` );
};

// Exportamos la funcion para que sea usada en weather location
export default getUrlByCity;