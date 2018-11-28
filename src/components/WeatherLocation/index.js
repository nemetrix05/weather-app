import React, { Component } from 'react';
// Importamnos los comp hijos
import { Location } from './Location';
import { WeatherData } from './WeatherData';
import './weatherlocation.css';
// Importo constantes iconos clima
import { 
        SUNNY
    } from '../../constanst/constants';


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

        cambioTitulo = () => {
           this.setState({
               city: 'Toronto'    
           })
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