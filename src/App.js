import React, { Component } from 'react';
// REDUX -  Con este modulo conectamos redux con react
import { connect } from 'react-redux';
import './App.css';
import LocationList from './components/LocationList';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TitleApp from './constanst/headerApp';
// Importamos las constantes para definir la conexion api imagen
import { api_key_img, url_base_url, url_query } from './constanst/api_url';
import { getBannerImg } from './services/getBannerImg';
// Importamos el componente ForecastExtended
import { ForecastExtended } from './components/ForecastExtended';
// Importamos la grilla de material UI design
import Grid from '@material-ui/core/Grid';
// Importamos las ACCIONES / REDUX
import { setCity } from './actions';

const cities = [
  'Rio de Janeiro,bra',
  'Medellín,col',
  'New York,eeuu',
  'Caracas,ven',
];

class App extends Component {

  // Creamos el state para manejar el cambio de ciudad en el forecast items
  constructor(){
      super();
      this.state = {
        city: null,
        banner: ''
      }
      // Hacemos el bindeo de la funcion para que se pueda usar en contexto this
      this.handleLocationClick = this.handleLocationClick.bind(this);
      this.getUrlImg = this.getUrlImg.bind(this);
  }

  // Manejador de eventos
  handleLocationClick = city => {
    var setTitle = city.substring(0, city.indexOf(','))
    this.setState({city: setTitle});
    // envoco la funcion que nos trae la imagen
    this.getUrlImg(city);

    // REDUX - Para llamar una accion en el app, llamamos la funcion store y generamos un metodo DISPATCH, el cual recibe un objeto que tiene el tipo de accion y su nuevo valor, que se actualizara en el store.
    this.props.setCity(city);

  }
  
  // Creamos la clase funcional que hara el fetch al api del servidor
  getUrlImg = city => {

      const url_api_banner = `${url_base_url}?client_id=${api_key_img}&query=${city}&${url_query}`;

      fetch(url_api_banner).then(
        data => (data.json())
      ).then(
        img_data => {
          const bannerData = getBannerImg(img_data);
          this.setState({ banner: bannerData });
        }
      ).catch(
        err => {
          console.log(err);
        }
      )
  }


  render() {

    /* Podemos hacer validaciones sobre datos, usando ternarias o solo validando el valor si no existe
        {
          city && 
          <ForecastExtended city={city} />
        }
    */

    const { city, banner } = this.state;

    return (
      [
        <TitleApp key="apptitle" titulo={"liveFORECAST"}/>,

        <div key="appcontent" style={{ padding: 0 }}>
          <Grid container spacing={0} alignContent='center' justify='space-between'>

              <Grid item md={1}></Grid>

              <Grid item md={3}>
                <LocationList 
                    cities={cities} 
                    onSelectedLocation={this.handleLocationClick} />
              </Grid>

              <Grid item md={6}>
                  <div className="forecast-main">
                    {
                      !city ? 
                      <Typography variant="h6" align="center" color="textSecondary" >Selecciona la ciudad</Typography> :
                      <ForecastExtended city={city}  banner={banner} />
                    }
                  </div>
              </Grid>    

              <Grid item md={1}></Grid> 

          </Grid>
        </div>
      ]

    );
  }
}

TitleApp.propTypes = {
  titulo: PropTypes.string.isRequired
};

// Para conectar React con redux , en el metodo connect pasamos 2 funciones 1, recibe el dispacher de acciones y la otra a cual componente  le asignara el store
const mapDispatchPropsActions = dispatch => ({
  // Esta funcion recibe el nombre de la accion como prop y la envia al store
  setCity: value => dispatch(setCity(value))
})

// Connec recibe tambien otra funcion, la cual le pasamos el nombre del componente
const AppConnected = connect(null, mapDispatchPropsActions)(App);

export default AppConnected;
