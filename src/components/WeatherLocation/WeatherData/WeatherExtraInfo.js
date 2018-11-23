import React from 'react';
import PropTypes from 'prop-types';

// Si queremos solo recibir un valor numnerico y agregarle un texto, usamos el template string que nos permite concatenar variables recibidas por props y añadirle texto string uso : comillas invertidas ${variable} texto.
const WeatherExtraInfo = ({humid, wind}) => (
    [
        <p key='humid'>{`${humid} % H`}</p>,
        <p key='wind'>{`${wind} m/s W`}</p>
    ]
);

WeatherExtraInfo.propTypes = {
    humid:  PropTypes.number.isRequired,
    wind:   PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export {
    WeatherExtraInfo
}