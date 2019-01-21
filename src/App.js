import React from 'react';
import './App.css';
import TitleApp from './constanst/headerApp';
// Importamos los contenedores
import LocationListContainer from './containers/locationListContainer';
import ForecastExtendedContainer from './containers/forecastExtendedContainer';
// Importamos la grilla de material UI design
import Grid from '@material-ui/core/Grid';

const cities = [
  'Rio de Janeiro,bra',
  'Toronto,can',
  'New York,eeuu',
  'Caracas,ven',
];

const App = () => {

      return (  
        <div>
            <TitleApp key="apptitle" titulo={"liveFORECAST"}/>
            <div key="appcontent" style={{ padding: 16 }}>
              <Grid container spacing={32} alignContent='center' justify='center'>

                  <Grid item lg={3} md={4} sm={5} xs={12}>
                    <LocationListContainer cities={cities} />
                  </Grid>

                  <Grid item lg={6} md={6} sm={7} xs={12}>
                      <div className="forecast-main">
                          <ForecastExtendedContainer />
                      </div>
                  </Grid>    

              </Grid>
            </div>
        </div>
      );

};

export default App;
