import React from 'react';
import WeatherIcons from 'react-weathericons';
import { 
    SUNNY,
    FOG,
    RAIN,
    SLEET,
    THUNDERSTORM
} from './../../constanst/constants';
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
        return <WeatherIcons name={`wi wi-day-${icon}`} size="2x" /> 
    }else{
        return <WeatherIcons name={'wi wi-solar-eclipse'} size="2x" />   
    }

};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className='gray'>
        { getWeatherIcon(weatherState) }
        <span>{`${temperature} C°`}</span>
    </div>
);


export {
    WeatherTemperature
}