import React from 'react';
// Importamnos los comp hijos
import { Location } from './Location';
import { WeatherData } from './WeatherData';
import './weatherlocation.css';
// Importamos el preload de la libreria material design
import CircularProgress from '@material-ui/core/CircularProgress';
// Importamos los proptypes para validar que el valor de las props sean los adecuados
import { PropTypes } from 'prop-types';

const WeatherLocation = ({ onLocationClick, city, data }) => ( 
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

// Valido con prop Types
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.any.isRequired
    })    
}

// Sintaxis arrow funcions devuelve una sola linea/ const nombrefuncion = () => (parentesis)

// Sintaxis si necesitamos ejecutar mas de una linea / const nombre = () => { usar return si queremos devolver el valor}


export default WeatherLocation;