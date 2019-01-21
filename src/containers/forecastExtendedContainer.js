import React, { Component } from 'react';
// Importamos el componente ForecastExtended
import { ForecastExtended } from '../components/ForecastExtended';
// Importamos el connect para enlazar el store y sacar el estado de la ciudad actual
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Importamos las constantes para definir la conexion api imagen
import { api_key_img, url_base_url, url_query } from '../constanst/api_url';
import { getBannerImg } from '../services/getBannerImg';

class ForecastExtendedContainer extends Component {

    // Creamos el state para manejar el cambio de ciudad en el forecast items
    constructor(){
        super();
        this.state = { banner: '' }
        // Hacemos el bindeo de la funcion para que se pueda usar en contexto this
        this.getUrlImg = this.getUrlImg.bind(this);
    }    

    // Creamos la clase funcional que hara el fetch al api del servidor
    getUrlImg = city => {
        //var setTitle = city.substring(0, city.indexOf(','))
        const url_api_banner = `${url_base_url}?client_id=${api_key_img}&query=${city}&${url_query}`;

        fetch(url_api_banner).then(
            data => (data.json())
            ).then(
            img_data => {
                const bannerData = getBannerImg(img_data);
                this.setState({ banner: bannerData });
            }
        )
    }    

    componentDidMount(){
        const { city } = this.props;
        this.getUrlImg(city);
    }

    componentDidUpdate(prevProps){
        const { city } = this.props;
        if(prevProps.city !== city){
            this.getUrlImg(city);
        }
    }

    render(){
        // llamamos las props que viene del app
        const { city } = this.props;
        const { banner } = this.state;

        return (
            city &&
            <ForecastExtended city={city} banner={banner} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired
}

// La diferencia con mapStateToProps: Este solo sirve para sacar datos del store y el dispachtto props es para enviar acciones al store
// A la funcion le pasamos el arg state y de alli por anotacion por puntos elegimos que propiedad de la accion queremos, en este caso city
const mapStateToProps = (state) => ({ city: state.city });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);


