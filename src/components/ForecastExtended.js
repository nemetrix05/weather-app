import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ForecastItem } from './ForecastItem';
import { api_key, url_base_forecast } from '../constanst/api_url';
// Importamos el servicio que transformara los datos
import transformForecast from '../services/transformForecast';
import LinearProgress from '@material-ui/core/LinearProgress';

class ForecastExtended extends Component {

    // Definimos el state de los datos
    constructor(){
        super();
        this.state = { forecastData: null }
    } 

    // Se crea una funcion que va iterar por cada uno de los dias 
    renderItems = (forecastData) =>{
        return forecastData.map(forecastData => (
            <ForecastItem 
                key={`${forecastData.weekDay}${forecastData.hour}`} 
                weekDay={forecastData.weekDay} 
                hora={forecastData.hour} 
                data={forecastData.data} />
        ));
    }

    // Creamos la funcion que muestra el preload si no estan los datos
    renderProgress = () => {
        return (
            <LinearProgress color="primary" variant="query" />
        );
    }

    // Usamos el ciclo de vida para cambiar el estado
    componentDidMount(){
        const { city } = this.props;
        this.updateCity(city);
        // Usar este componente para cargar datos
    }

    // Se ejecuta cuando cambien las propiedades o sytate, le pasamos las props que cambian al dar clicl en cada elemento
    componentWillReceiveProps(nextProps){
        const { city } = this.props;
        // cambio el state  para mostrar la carga
        this.setState({ forecastData: null});
        // Si recibo un cambio en la prop city, ejecute de nuevo el fetch
        if(nextProps.city !== city) {
            this.updateCity(nextProps.city);
        }else{
            this.updateCity(city);
        }
    }

    // Se crea una funcion que solo hara el fetch
    updateCity = city => {
        // Aqui hacemos la consulta al api con fetch o axios
        const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;  
        
        fetch(url_forecast).then( 
            // Con este metodo convertimos la respuesta a JSON
            data => (data.json())
        ).then(
            wheader_data => {
                // Se crea una constante que va llamar el servicio de transformacion
                const forecastData = transformForecast(wheader_data);
                // Se asigna al set state los datos ya transformados
                this.setState({ forecastData });
            }
        ).catch(
            err => {
                console.log("Ocurrio un error:", err);
            }
        );
    }


    render() {
        // Creamos la constante de ciudad
        const {city, banner} = this.props;
        // Nueva constante con los datos de item
        const { forecastData } = this.state;
        
        return(
            <div>
                <div className="banner" style={ { backgroundImage: `url(${banner})` } }>
                    <h1>{city}</h1>
                </div>
                {forecastData ? 
                    this.renderItems(forecastData) :
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired
}

export { ForecastExtended }