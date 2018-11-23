import React from 'react';
// Importamnos los comp hijos
import { Location } from './Location';
import { WeatherData } from './WeatherData';

// Si los componentes no tienen funcionalida, SIEMPRE tratar de usar componente puros
// En este caso usaremos una arrow funcion

const WeatherLocation = () => (
       [
        <Location 
                city={'Buenos Aires'}
                key='Location'
        />,
        <WeatherData 
                key='WheatherData'
        />
       ]
);

// Sintaxis arrow funcions devuelve una sola linea/ const nombrefuncion = () => (parentesis)

// Sintaxis si necesitamos ejecutar mas de una linea / const nombre = () => { usar return si queremos devolver el valor}


export default WeatherLocation;