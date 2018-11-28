import React from 'react';
// Import subelements
import { WeatherTemperature } from './WeatherTemperature';
import { WeatherExtraInfo } from './WeatherExtraInfo';
import PropTypes from 'prop-types';

// Recibo en la funcion la constante data con los 4 valores, hay que hacerle un destructuring para asignar los valores de data.
const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => (
    <div className="columns is-mobile">
        <div className="column is-half">
            <WeatherTemperature 
                temperature={temperature}
                weatherState={weatherState}
            />
        </div>
        <div className="column is-half">
            <WeatherExtraInfo 
                humid={humidity} 
                wind={wind} 
            />
        </div>
    </div>
);

// Validamos las props de data, con el shape que valida los objetos y sus propiedades
WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.any.isRequired
    })
}

export {
    WeatherData
}