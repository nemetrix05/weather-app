import React from 'react';
import WeatherIcons from 'react-weathericons';

// Usamos una constante, para obtener el icono de acuerdo al clima

const icons = {
    sunny: 'wi-day-sunny',
    fog:   'wi-day-fog'
};

const getWeatherIcon = weatherState => {

    // Se crea una constante a la cual se le asigna icons y se pasa en una array el valor que viene por parametro

    const icon = icons[weatherState];

    console.log(icon);

    // Valido que no venga vacio

   if(icon){ 
        return <WeatherIcons name={`wi ${icon}`} size="2x" /> 
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