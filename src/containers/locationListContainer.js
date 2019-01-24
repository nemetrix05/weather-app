import React, { Component } from 'react';
import LocationList from '../components/LocationList';
import PropTypes from 'prop-types';
// REDUX - Con este modulo conectamos redux con react
import { connect } from 'react-redux';
// Importamos las ACCIONES / REDUX
import { setSelectedCity, setWeather } from '../actions';
import { getWheatherCities, getCity } from '../reducers';

class LocationListContainer extends Component {

    componentDidMount(){
        // Envocamos las props que traen las propiedades del store
        const { setWeather, cities, setCity, city } = this.props;
        setCity(city);
        setWeather(cities);
    }

    // Manejador de eventos
    handleLocationClick = city => {
        // REDUX - Para llamar una accion en el app, llamamos la funcion store y generamos un metodo DISPATCH, el cual recibe un objeto que tiene el tipo de accion y su nuevo valor, que se actualizara en el store.
        this.props.setCity(city);
    }    

    render(){
        const { citiesWeather } = this.props;
        return (
            <LocationList 
            cities={citiesWeather} 
            onSelectedLocation={this.handleLocationClick} />
        );
    }
    
}


// Valido las prop Types del componente
LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities:  PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired
};
  
// Para conectar React con redux , en el metodo connect pasamos 2 funciones 1, recibe el dispacher de acciones y la otra a cual componente  le asignara el store
const mapDispatchProps = dispatch => ({
    // Esta funcion recibe el nombre de la accion como prop y la envia al store
    setCity: value => dispatch(setSelectedCity(value)),
    // Creamos una nueva accion que va obtener los datos de las ciudades por defecto
    setWeather: cities => dispatch(setWeather(cities))
})
  
// Como la array de ciudades la estaba recibiendo por props, ahora tenemos que sacar ese dato del state
const mapStateToProps = state => ({ 
    citiesWeather: getWheatherCities(state),
    city: getCity(state) 
});


// Connect recibe tambien otra funcion, la cual le pasamos el nombre del componente
export default connect(mapStateToProps, mapDispatchProps)(LocationListContainer);
