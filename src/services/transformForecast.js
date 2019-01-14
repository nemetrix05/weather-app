// Con esta libreria se convierte la fecha
import moment from 'moment';
// Moment transform idiom day
import 'moment/locale/es';
// Importamos el servicio que convierte toda la data, ya esta creado
import transformWeather from './transformWeather';

const transformForecast = data => (
    // Filtra los datos segun la hora que necesitamos
    data.list.filter(item => (
        // Accede a la propiedad dt y muestra las que estan en el rango de hora indicada
        moment.unix(item.dt).utc().hour() === 6 ||
        moment.unix(item.dt).utc().hour() === 12 ||
        moment.unix(item.dt).utc().hour() === 18
    )).map(item => (
        {
            // Aqui saca de los objetos las propiedades que necesita el forecastItem
            // GET dia de la semana
            weekDay: moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }
    ))
)

export default transformForecast;