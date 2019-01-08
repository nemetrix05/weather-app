import React, { Component } from 'react';
// Importamnos los comp hijos
import { Location } from './Location';
import { WeatherData } from './WeatherData';
import './weatherlocation.css';
// Importamos el servicio que transforma los datos
import transformWeather from '../../services/transformWeather';
// Importamos el preload de la libreria material design
import CircularProgress from '@material-ui/core/CircularProgress';
// Importamos los proptypes para validar que el valor de las props sean los adecuados
import { PropTypes } from 'prop-types';
// Importamos la funcion para obtener el api con la ciudad.
import getUrlByCity from '../../services/getWeatherCity';

// Si los componentes no tienen funcionalida, SIEMPRE tratar de usar componente puros
// En este caso usaremos una arrow funcion

class WeatherLocation extends Component {
        
        constructor(props){
            super(props);

            // Se usa desestructuring para definir las props del constructor
            const { city } = props; 

            this.state = {
                city,
                data: ''
            };

            // Bindear una funcion para que se pueda cambiar su state
            //this.cambioTitulo = this.cambioTitulo.bind(this);
        }

        // las consultas api y demas servicios, no se aconseja en el metodo willmount, ya que muchas veces no se asegura una carga rapida de las peticiones, se recomienda manejarlo en el did mount cuando ya el componente este cargado

        componentDidMount(){
            this.getWeatherState();
        }

        shouldComponentUpdate(nextProps, nextState) {
            const { city } = this.state;
            if(city !== nextState.city){
                return true;
            }else{
                return false;
            }
        }
        

        getWeatherState = () => {

            const { city } = this.state;

            // creamos una constante para llamar la funcion del api
            const api_weather = getUrlByCity(city);
            
            // Se hace el fetch en el momento de envocar alguna funcion o en el ciclo de vida
            
            fetch(api_weather).then( (res) => {
                // Como el servidor nos responde no en formato JSON, entonces debemos convertirla a json y esto crea una nueva promesa
                return res.json();

            }).then( (data) =>{
                const newWeather = transformWeather(data);
                this.setState({
                    city: data.name,
                    data: newWeather
                })
            }).catch( (error) => {
                console.log(error);
            });
        }

        render(){
                const { onLocationClick } = this.props;

                const {city, data} = this.state;
                
                return(
                        <div className='wraplocation' onClick={onLocationClick}>
                                <Location city={city} />
                                { data ? 
                                    <WeatherData data={data} /> : 
                                    <CircularProgress 
                                        size={50}
                                    /> 
                                }
                        </div>
                );     
        }       
}


// Valido con prop Types
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onLocationClick: PropTypes.func
}

// Sintaxis arrow funcions devuelve una sola linea/ const nombrefuncion = () => (parentesis)

// Sintaxis si necesitamos ejecutar mas de una linea / const nombre = () => { usar return si queremos devolver el valor}


export default WeatherLocation;