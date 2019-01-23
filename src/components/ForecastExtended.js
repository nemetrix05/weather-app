import React from 'react';
import PropTypes from 'prop-types';
import { ForecastItem } from './ForecastItem';
import LinearProgress from '@material-ui/core/LinearProgress';

// Se eliminaron los metodos del ciclo de vida ya que podemos acceder a los datos directamente del store
// Luego convertimos las funciones de transformacion en arrow functions

    // Se crea una funcion que va iterar por cada uno de los dias 
const renderItems = (forecastData) =>{
    return forecastData.map(forecastData => (
        <ForecastItem 
            key={`${forecastData.weekDay}${forecastData.hour}`} 
            weekDay={forecastData.weekDay} 
            hora={forecastData.hour} 
            data={forecastData.data} />
    ));
}

    // Creamos la funcion que muestra el preload si no estan los datos
const renderProgress = () => {
    return (
        <LinearProgress color="primary" variant="query" />
    );
}

// Guardamos las propiedades que recibimos por props desde el store y el banner
const ForecastExtended = ({city, banner, forecastData}) => (
    
    <div>
        <div className="banner" style={ { backgroundImage: `url(${banner})` } }>
            <h1>{city}</h1>
        </div>
        {forecastData ? 
            renderItems(forecastData) :
            renderProgress()
        }
    </div>
    
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired,
    forecastData: PropTypes.array
}

export { ForecastExtended }