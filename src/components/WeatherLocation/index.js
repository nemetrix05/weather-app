import React, { Component } from 'react';
// Importamnos los comp hijos
import { Location } from './Location';
import { WeatherData } from './WeatherData';
import './weatherlocation.css';
// Importamos el servicio que transforma los datos
import transformWeather from '../../services/transformWeather';
// Importamos LA CONSULTA al API
import { api_weather } from '../../constanst/api_url'; 
// Importamos el preload de la libreria material design
import CircularProgress from '@material-ui/core/CircularProgress';

// Si los componentes no tienen funcionalida, SIEMPRE tratar de usar componente puros
// En este caso usaremos una arrow funcion

class WeatherLocation extends Component {
        
        constructor(props){
            super(props)
            this.state = {
                city: '',
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
            // Se hace el fetch en el momento de envocar alguna funcion o en el ciclo de vida
            fetch(api_weather).then( (res) => {
                // Como el servidor nos responde no en formato JSON, entonces debemos convertirla a json y esto crea una nueva promesa
                return res.json();
            }).then( (data) =>{
                const newWeather = transformWeather(data);
                console.log(newWeather);
                this.setState({
                    city: 'Bogota',
                    data: newWeather
                })
            }).catch( (error) => {
                console.log(error);
            });
        }

        render(){
                const {city, data} = this.state;
                return(
                        <div className='wraplocation'>
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

// Sintaxis arrow funcions devuelve una sola linea/ const nombrefuncion = () => (parentesis)

// Sintaxis si necesitamos ejecutar mas de una linea / const nombre = () => { usar return si queremos devolver el valor}


export default WeatherLocation;