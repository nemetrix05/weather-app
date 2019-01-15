import React from 'react';
import PropTypes from 'prop-types';
// Importamos el componente de Wearther Data
import { WeatherData } from '../WeatherLocation/WeatherData';

const ForecastItem = ({weekDay, hora, data}) => {
    return (
        <div className="forecastitem">
            <h3>{weekDay} Hora: {hora} hs</h3>
            <div><WeatherData data={data} /></div>
        </div>
    );
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hora: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.any.isRequired
    })    
}

export { ForecastItem }