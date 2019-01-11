// Importo constantes iconos clima
import { 
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from '../constanst/weathers';

// importamos el convertidor
import convert from 'convert-units';

    // se crea una funcion que reciba el valor en grados k y los convierta en c, con le metodo converter

    const getTemp = ( gkelvin ) => {
        // Usamos Javascript para transformar a dos decimales
        return Number(convert(gkelvin).from('K').to('C').toFixed(0));
    }


    // funcion para el icono
    const getIconState = weather =>{
            // En esta funcion recibo el valor del ID del icono y hago las validaciones para asignarles el valor correspondiente
            const { id } = weather;

            if (id < 300) {
                return THUNDER;
            } else if (id < 400) {
                return DRIZZLE;
            } else if (id < 600) {
                return RAIN;
            } else if (id < 700) {
                return SNOW;
            } else if (id === 800) {
                return SUN;
            } else {
                return CLOUD;
            }
    }


    /*TRANSFORMACION DE DATOS*/
    const transformWeather = weather_data => {
        // creamos la desestructuracion para envocarl del json los parametros que necesitamos
        const { temp, humidity } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = getIconState(weather_data.weather[0]);
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