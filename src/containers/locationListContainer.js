import React, { Component } from 'react';
import LocationList from '../components/LocationList';
import PropTypes from 'prop-types';
// REDUX - Con este modulo conectamos redux con react
import { connect } from 'react-redux';
// Importamos las ACCIONES / REDUX
// cuando bindeamos las acciones, importamos todas las acciones y de alli elegimos las que necesitemos
import * as actions from '../actions';
import { getWheatherCities, getCity } from '../reducers';
// importamos el bind action simplifica la escritura del las acciones
import { bindActionCreators } from 'redux';

class LocationListContainer extends Component {

    componentDidMount(){
        // Envocamos las props que traen las propiedades del store
        const { setWeather, cities, setSelectedCity, city } = this.props;
        
        setWeather(cities);
        setSelectedCity(city);
    }

    // Manejador de eventos
    handleLocationClick = city => {
        // REDUX - Para llamar una accion en el app, llamamos la funcion store y generamos un metodo DISPATCH, el cual recibe un objeto que tiene el tipo de accion y su nuevo valor, que se actualizara en el store.
        this.props.setSelectedCity(city);
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
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities:  PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired
};


// Opcion con bind action creators
// El metodo bindActionCreators recibe 2 parametros, las acciones y el dispatch
const mapDispatchProps = dispatch => bindActionCreators(actions, dispatch);


 /* 
// Para conectar React con redux , en el metodo connect pasamos 2 funciones 1, recibe el dispacher de acciones y la otra a cual componente  le asignara el store
const mapDispatchProps = dispatch => ({
    // Esta funcion recibe el nombre de la accion como prop y la envia al store
    setCity: value => dispatch(setSelectedCity(value)),
    // Creamos una nueva accion que va obtener los datos de las ciudades por defecto
    setWeather: cities => dispatch(setWeather(cities))
});*/
  
// Como la array de ciudades la estaba recibiendo por props, ahora tenemos que sacar ese dato del state
const mapStateToProps = state => ({ 
    citiesWeather: getWheatherCities(state),
    city: getCity(state)
});


// Connect recibe tambien otra funcion, la cual le pasamos el nombre del componente
export default connect(mapStateToProps, mapDispatchProps)(LocationListContainer);
