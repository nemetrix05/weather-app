import React from 'react';

// Si queremos solo recibir un valor numnerico y agregarle un texto, usamos el template string que nos permite concatenar variables recibidas por props y añadirle texto string uso : comillas invertidas ${variable} texto.
const WeatherExtraInfo = ({humid, wind}) => (
    <div className='red'>
        <ul>
            <li>{`${humid} % H`}</li>
            <li>{`${wind} m/s W`}</li>
        </ul>
    </div>
);

export {
    WeatherExtraInfo
}