import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Importamos el componente ForecastExtended
import { ForecastExtended } from './components/ForecastExtended';

// Importamos la grilla de material UI design
import Grid from '@material-ui/core/Grid';

const cities = [
  'San Andrés,col',
  'Buenos Aires,ar',
  'Bogotá,col',
];

// Title Structure

function TitleApp (props) {

  const { titulo } = props;

  return (
    <div key="apptitle" style={{ padding: 0, marginBottom: 30 }}>
      <Grid container spacing={0} alignItems='center' alignContent='center' justify='space-between'>
          <Grid item md={12}>
              <AppBar position="sticky" color="primary">
                <Toolbar>
                  <Grid container direction="row" alignItems="center">
                      <Grid item md={6}>
                          <Typography variant="h6" color="inherit">{titulo}</Typography>
                      </Grid>
                      <Grid item md={6}>
                          <Typography variant="body2" color="inherit" align="right" >Bogota,DC 25-03-2030</Typography>
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
        city: null
      }
      // Hacemos el bindeo de la funcion para que se pueda usar en contexto this
      this.handleLocationClick = this.handleLocationClick.bind(this);
  }

  // Manejador de eventos
  handleLocationClick = city =>{
    /*var setTitle = city.substring(0, city.indexOf(','))
    this.setState({city: setTitle}); */
    this.setState({city}); 
  }
  
  render() {

    /* Podemos hacer validaciones sobre datos, usando ternarias o solo validando el valor si no existe
        {
          city && 
          <ForecastExtended city={city} />
        }
    */

    const { city } = this.state

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
                      <ForecastExtended city={city} />
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
