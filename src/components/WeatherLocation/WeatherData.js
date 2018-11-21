import React from 'react';
// Import subelements
import { WeatherTemperature } from './WeatherTemperature';
import { WeatherExtraInfo } from './WeatherExtraInfo';

const WeatherData = () => (
    <div className='green'>
        <WeatherTemperature 
            temperature={25}
            weatherState={'fog'}
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