import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city='Moscu,urss'/>
        <WeatherLocation city='New York,eeuu'/>
        <WeatherLocation city='Rio de Janeiro,bra'/>
    </div>
);

export default LocationList;

