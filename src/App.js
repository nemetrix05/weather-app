import React, { Component } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import TitleApp from './constanst/headerApp';
// Importamos las constantes para definir la conexion api imagen
import { api_key_img, url_base_url, url_query } from './constanst/api_url';
import { getBannerImg } from './services/getBannerImg';
// Importamos el componente ForecastExtended
import { ForecastExtended } from './components/ForecastExtended';
// Importamos la grilla de material UI design
import Grid from '@material-ui/core/Grid';
import LocationListContainer from './containers/locationListContainer';

const cities = [
  'Rio de Janeiro,bra',
  'Toronto,can',
  'New York,eeuu',
  'Caracas,ven',
];

class App extends Component {

  // Creamos el state para manejar el cambio de ciudad en el forecast items
  constructor(){
      super();
      this.state = { city: null, banner: '' }
      // Hacemos el bindeo de la funcion para que se pueda usar en contexto this
      this.getUrlImg = this.getUrlImg.bind(this);
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

  handleImg = city => {
    var setTitle = city.substring(0, city.indexOf(','))
    // Cambio el estado de la ciudad
    this.setState({ city: setTitle });
    // envoco la funcion que nos trae la imagen
    this.getUrlImg(setTitle);
  }


  render() {

    const { city, banner } = this.state;

    return (
      [
        <TitleApp key="apptitle" titulo={"liveFORECAST"}/>,

        <div key="appcontent" style={{ padding: 16 }}>
          <Grid container spacing={32} alignContent='center' justify='center'>

              <Grid item lg={3} md={4} sm={5} xs={12}>
                <LocationListContainer 
                    cities={cities} 
                    setCityBy={this.handleImg} />
              </Grid>

              <Grid item lg={6} md={6} sm={7} xs={12}>
                  <div className="forecast-main">
                    {
                      !city ? 
                      <Typography variant="h6" align="center" color="textSecondary" >Selecciona la ciudad</Typography> :
                      <ForecastExtended city={city}  banner={banner} />
                    }
                  </div>
              </Grid>    

          </Grid>
        </div>
      ]

    );
  }
}

export default App;
