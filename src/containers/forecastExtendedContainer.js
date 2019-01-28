import React, { Component } from 'react';
// Importamos el componente ForecastExtended
import { ForecastExtended } from '../components/ForecastExtended';
// Importamos el connect para enlazar el store y sacar el estado de la ciudad actual
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getForecastDataFromCities, getCity, getBanner } from '../reducers';
// Importamos las acciones
import { setBannerCity } from '../actions';

class ForecastExtendedContainer extends Component {
 
    componentDidMount(){
        const { city, setBannerCity } = this.props;
        setBannerCity(city);
    }

    componentDidUpdate(prevProps){
        const { city, setBannerCity } = this.props;
        if(prevProps.city !== city){
            setBannerCity(city);
        }
    }

    render(){
        // llamamos las props que viene del app
        const { city, forecastData, banner } = this.props;
        return (
            city &&
            <ForecastExtended city={city} banner={banner} forecastData={forecastData} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
    setBannerCity: PropTypes.func.isRequired,
    banner: PropTypes.string
}

// Enviamos el dispatch para la llamar la accion de llamar el banner
const mapDispatchProps = dispatch => ({
    setBannerCity: value => dispatch(setBannerCity(value))
});

// La diferencia con mapStateToProps: Este solo sirve para sacar datos del store y el dispachtto props es para enviar acciones al store
// A la funcion le pasamos el arg state y de alli por anotacion por puntos elegimos que propiedad de la accion queremos, en este caso city
const mapStateToProps = state => ({ 
    city: getCity(state), 
    forecastData: getForecastDataFromCities(state),
    banner: getBanner(state)
});

// Lo que hicimos es guardar en la propiedad forecastData, le ruta donde esta el array de la informacion.

export default connect(mapStateToProps, mapDispatchProps)(ForecastExtendedContainer);


