import React from 'react';
// Import subelements
import { WeatherTemperature } from './WeatherTemperature';
import { WeatherExtraInfo } from './WeatherExtraInfo';
import PropTypes from 'prop-types';
// Importamos la grilla de material UI design
import Grid from '@material-ui/core/Grid';

// Recibo en la funcion la constante data con los 4 valores, hay que hacerle un destructuring para asignar los valores de data.
const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => (
    <Grid container spacing={32} alignItems='center' alignContent='center' justify='space-between'>
        <Grid item xs={6}>
            <WeatherTemperature 
                temperature={temperature}
                weatherState={weatherState}
            />
        </Grid>
        <Grid item xs={6}>
            <WeatherExtraInfo 
                humid={humidity} 
                wind={wind} 
            />
        </Grid>
    </Grid>
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