import React from 'react';
import PropTypes from 'prop-types';

// Se crea una constante para estilos en linea
const MyStyles = {
    fontWeight: 500,
}

// Si queremos solo recibir un valor numnerico y agregarle un texto, usamos el template string que nos permite concatenar variables recibidas por props y añadirle texto string uso : comillas invertidas ${variable} texto.
const WeatherExtraInfo = ({humid, wind}) => {
    return(
        <div className='wheadericon'>
            <div><strong style={MyStyles}>Humedad:</strong> {`${humid} %`}</div>
            <div><strong style={MyStyles}>Vientos:</strong> {`${wind} m/s`}</div>
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