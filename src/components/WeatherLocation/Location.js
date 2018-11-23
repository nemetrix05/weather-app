import React from 'react';
import PropTypes from 'prop-types';

// Para mostrar los datos dinamicamente es recomendable usar parametros para obtener las props desde otro componente
const Location = (props) => {
    // Destructuracion
    const { city } = props;

    return( <h2>{city}</h2> );
}

Location.propTypes = {
    city: PropTypes.string.isRequired
}

export {
    Location
}