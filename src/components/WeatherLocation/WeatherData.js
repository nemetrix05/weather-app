import React from 'react';
// Import subelements
import { WeatherTemperature } from './WeatherTemperature';
import { WeatherExtraInfo } from './WeatherExtraInfo';
// Importo constantes iconos clima
import { 
    SUNNY,
    FOG,
    RAIN,
    SLEET,
    THUNDERSTORM
} from './../../constanst/constants';

const WeatherData = () => (
    <div className='green'>
        <WeatherTemperature 
            temperature={25}
            weatherState={SUNNY}
        />
        <WeatherExtraInfo 
            humid={'90'} 
            wind={'5'} 
        />
    </div>
);

export {
    WeatherData
}