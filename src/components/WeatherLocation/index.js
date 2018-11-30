import React, { Component } from 'react';
// Importamnos los comp hijos
import { Location } from './Location';
import { WeatherData } from './WeatherData';
import './weatherlocation.css';
// Importo constantes iconos clima
import { 
        SUNNY
    } from '../../constanst/constants';

// importamos el convertidor
import convert from 'convert-units';


// Conectamos con el api de clima
// Definimos las constantes con las variables para conectar con el api key

const location     = 'Bogota,col';
const api_key      = 'd2b2dbd137f5d1ec2fb1e7f4d25f04b7';
const url_base_api = 'http://api.openweathermap.org/data/2.5/weather';

// concatenamos todo la consulta en una constante para pasarla al metodo fecth
// Para que convierta la temperatura, usamos el parametro extra en la documentacion del api &units=metric

// o por medio de un plugin: npm install --save convert-units

const api_weather = `${url_base_api}?q=${location}&appid=${api_key}`;


// Creamos una constante que guardara los 4 parametros para wheader data
const data = {
        temperature: 10,
        weatherState: SUNNY,
        humidity: 20,
        wind: '90'
}


// Si los componentes no tienen funcionalida, SIEMPRE tratar de usar componente puros
// En este caso usaremos una arrow funcion

class WeatherLocation extends Component {
        
        constructor(props){
            super(props)
            this.state = {
                city: 'Roma',
                data: data
            };

            // Bindear una funcion para que se pueda cambiar su state
            //this.cambioTitulo = this.cambioTitulo.bind(this);
        }


        // se crea una funcion que reciba el valor en grados k y los convierta en c, con le metodo converter

        getTemp = ( gkelvin ) => {
            return convert(gkelvin).from('K').to('C');
        }


        // funcion para el icono
        getIconState = weather_data =>{
                return SUNNY;
        }


        /*TRANSFORMACION DE DATOS*/
        getData = weather_data =>{
           // creamos la desestructuracion para envocarl del json los parametros que necesitamos
           const { temp, humidity } = weather_data.main;
           const { speed } = weather_data.wind;
           const weatherState = this.getIconState(weather_data);
           // Se obtiene la temperatura ya convertida
           const temperature = this.getTemp(temp);
        
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

        cambioTitulo = () => {
            // Se hace el fetch en el momento de envocar alguna funcion o en el ciclo de vida
            fetch(api_weather).then( (res) => {
                // Como el servidor nos responde no en formato JSON, entonces debemos convertirla a json y esto crea una nueva promesa
                return res.json();
            }).then( (data) =>{
                const newWeather = this.getData(data);
                console.log(newWeather);
                this.setState({
                    city: 'Bogota',
                    data: newWeather
                })
            }).catch((error) => {
                console.log(error);
            });
        }

        render(){
                const {city, data} = this.state;

                return(
                        <div className='wraplocation'>
                                <Location city={city} />
                                <WeatherData data={data} />
                                <button type='button' onClick={this.cambioTitulo}>Cambio titulo</button>
                        </div>
                );     
        }       
}

// Sintaxis arrow funcions devuelve una sola linea/ const nombrefuncion = () => (parentesis)

// Sintaxis si necesitamos ejecutar mas de una linea / const nombre = () => { usar return si queremos devolver el valor}


export default WeatherLocation;