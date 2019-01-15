import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// Importamos las constantes para definir la conexion api imagen
import { api_key_img, url_base_url, url_query } from './constanst/api_url';
import { getBannerImg } from './services/getBannerImg';
import moment from 'moment';
// Importamos el componente ForecastExtended
import { ForecastExtended } from './components/ForecastExtended';
import Icon from '@material-ui/core/Icon';
// Importamos la grilla de material UI design
import Grid from '@material-ui/core/Grid';


const cities = [
  'Rio de Janeiro,bra',
  'Roma,it',
  'New York,eeuu',
  'Caracas,ven',
];

// Title Structure

function TitleApp (props) {

  const { titulo } = props;

  const fecha = moment().format("DD/MM/YYYY, h:mm a");

  return (
    <div key="apptitle" style={{ padding: 0, marginBottom: 30 }}>
      <Grid container spacing={0} alignItems='center' alignContent='center' justify='space-between'>
          <Grid item md={12}>
              <AppBar position="sticky" color="primary">
                <Toolbar>
                  <Grid container direction="row" alignItems="center">
                      <Grid item md={6}>
                          <Typography variant="h6" color="inherit">
                              <div className="middle">
                                  <Icon color='inherit' className='material-icons' fontSize="large" style={{marginRight: 10}}>wb_incandescent</Icon>
                              </div>
                              <div className="middle">{titulo}</div>
                          </Typography>
                      </Grid>
                      <Grid item md={6}>
                          <Typography variant="body2" color="inherit" align="right" >{fecha}</Typography>
                      </Grid>
                  </Grid>
                </Toolbar>
              </AppBar>
          </Grid>
      </Grid>
    </div>
  )
}


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
        <TitleApp key="apptitle" titulo="liveFORECAST"/>,

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

export default App;
