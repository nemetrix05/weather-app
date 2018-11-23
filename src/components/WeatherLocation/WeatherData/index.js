import React from 'react';
// Import subelements
import { WeatherTemperature } from './WeatherTemperature';
import { WeatherExtraInfo } from './WeatherExtraInfo';
// Importo constantes iconos clima
import { 
    SUNNY,
    /*FOG,
    RAIN,
    SLEET,
    THUNDERSTORM */
} from '../../../constanst/constants';

const WeatherData = () => (
    [
        <WeatherTemperature 
            key='WeatherTemperature'
            temperature={60}
            weatherState={SUNNY}
        />,
        <WeatherExtraInfo 
            key='WeatherExtraInfo'
            humid={100} 
            wind={'80'} 
        />
    ]
);

export {
    WeatherData
}