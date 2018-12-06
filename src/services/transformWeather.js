// Importo constantes iconos clima
import { 
    SUNNY
} from '../constanst/constants';

// importamos el convertidor
import convert from 'convert-units';

    // se crea una funcion que reciba el valor en grados k y los convierta en c, con le metodo converter

    const getTemp = ( gkelvin ) => {
        // Usamos Javascript para transformar a dos decimales
        return Number(convert(gkelvin).from('K').to('C').toFixed(2));
    }


    // funcion para el icono
    const getIconState = weather_data =>{
           // console.log(weather_data);
            return SUNNY;
    }


    /*TRANSFORMACION DE DATOS*/
    const transformWeather = weather_data => {
        // creamos la desestructuracion para envocarl del json los parametros que necesitamos
        const { temp, humidity } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = getIconState(weather_data);
        // Se obtiene la temperatura ya convertida
        const temperature = getTemp(temp);

        // definimos los nuevos datos para actualizar el state
        const data = {
            // cuando la propiedad y el valor son iguales se deja uno, esto se llama value shorthand ES6 specification
            temperature,
            weatherState,
            humidity,
            wind: speed
        }           

        // IMPORTANTE RETORNAR LA NUEVA DATA
        return data;

    }

    export default transformWeather;