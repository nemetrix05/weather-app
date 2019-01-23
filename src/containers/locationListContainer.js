import React, { Component } from 'react';
import LocationList from '../components/LocationList';
import PropTypes from 'prop-types';
// REDUX - Con este modulo conectamos redux con react
import { connect } from 'react-redux';
// Importamos las ACCIONES / REDUX
import { setSelectedCity, setWeather } from '../actions';

class LocationListContainer extends Component {

    componentDidMount(){
        this.props.setSelectedCity('Bogotá,col');
        this.props.setWeather(this.props.cities);
    }

    // Manejador de eventos
    handleLocationClick = city => {
        // REDUX - Para llamar una accion en el app, llamamos la funcion store y generamos un metodo DISPATCH, el cual recibe un objeto que tiene el tipo de accion y su nuevo valor, que se actualizara en el store.
        this.props.setSelectedCity(city);
    }    

    render(){
        const { cities } = this.props;

        return (
            <LocationList 
            cities={cities} 
            onSelectedLocation={this.handleLocationClick} />
        );
    }
    
}


// Valido las prop Types del componente
LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    cities:  PropTypes.array.isRequired
};
  
// Para conectar React con redux , en el metodo connect pasamos 2 funciones 1, recibe el dispacher de acciones y la otra a cual componente  le asignara el store
const mapDispatchProps = dispatch => ({
    // Esta funcion recibe el nombre de la accion como prop y la envia al store
    setSelectedCity: value => dispatch(setSelectedCity(value)),
    // Creamos una nueva accion que va obtener los datos de las ciudades por defecto
    setWeather: cities => dispatch(setWeather(cities))
})
  
// Connect recibe tambien otra funcion, la cual le pasamos el nombre del componente
export default connect(null, mapDispatchProps)(LocationListContainer);
