import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ForecastItem } from './ForecastItem';

// Creamos una array que va contener los dias de la semana para mostrar en el componente ForecastItem
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
]

class ForecastExtended extends Component {

    // Se crea una funcion que va iterar por cada uno de los dias 

    renderItems = () =>{
        return (days.map(day => (<ForecastItem key={day} weekDay={day}/>)))
    }


    render() {
        // Creamos la constante de ciudad
        const {city} = this.props;

        return(
            <div>
                {city}
                {this.renderItems()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export {
   ForecastExtended 
}