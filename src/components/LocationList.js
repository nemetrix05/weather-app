import React from 'react';
import WeatherLocation from './WeatherLocation';
// Validamos la lista de ciudades con proptipes
import PropTypes from 'prop-types';

// Se crea una funcion que se encargara de iterar sobre cada uno de los elementos de la array

const transformCity = (cities) => (
    cities.map( (city) => <WeatherLocation city={city} key={city}/> )
);

const LocationList = ({ cities }) => {
    return (
        <div>
            {transformCity(cities)}
        </div>
    );
}

// El parametro MAP() itera sobre los elementos de una ARRAY esuna caracteristica nueva de ES6

LocationList.propTypes = {
    cities: PropTypes.array.isRequired
}

export default LocationList;

