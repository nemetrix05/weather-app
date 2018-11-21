import React from 'react';

// Para mostrar los datos dinamicamente es recomendable usar parametros para obtener las props desde otro componente
const Location = (props) => {
    // Destructuracion
    const { city } = props;

    return(
        <div className='black'>
            <h2>{city}</h2>
        </div>
    );
}

export {
    Location
}