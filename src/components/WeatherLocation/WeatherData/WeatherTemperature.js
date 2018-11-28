import React from 'react';
import WeatherIcons from 'react-weathericons';
// importamos las prop types
import PropTypes from 'prop-types'; 
import { 
    SUNNY,
    FOG,
    RAIN,
    SLEET,
    THUNDERSTORM
} from '../../../constanst/constants';
// Usamos una constante, para obtener el icono de acuerdo al clima

const icons = {
    [SUNNY]:          'sunny',
    [FOG]:            'fog',
    [RAIN]:           'rain',
    [SLEET]:          'sleet',
    [THUNDERSTORM]:   'thunderstorm'
};

const getWeatherIcon = weatherState => {

    // Se crea una constante a la cual se le asigna icons y se pasa en una array el valor que viene por parametro

    const icon = icons[weatherState];

    // Valido que no venga vacio

   if(icon){ 
        return <WeatherIcons name={`wi wi-day-${icon}`} size="3x" /> 
    }else{
        return <WeatherIcons name={'wi wi-solar-eclipse'} size="3x" />   
    }

};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className='wheadericon'>
        <span className='geticon'>
            { getWeatherIcon(weatherState) }
        </span>
        <span>{`${temperature} C°`}</span>
    </div>
);

// Validamos la props propTypes siempre en minuscula

WeatherTemperature.propTypes = {
    temperature:    PropTypes.number.isRequired,
    weatherState:   PropTypes.string.isRequired
};

export {
    WeatherTemperature
}