import React from 'react';
import PropTypes from 'prop-types';

// Si queremos solo recibir un valor numnerico y agregarle un texto, usamos el template string que nos permite concatenar variables recibidas por props y añadirle texto string uso : comillas invertidas ${variable} texto.
const WeatherExtraInfo = ({humid, wind}) => {
    return(
        <div className='wheadericon'>
            <div><strong>Humedad:</strong> {`${humid} %`}</div>
            <div><strong>Vientos:</strong> {`${wind} m/s`}</div>
        </div>
    );
};

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