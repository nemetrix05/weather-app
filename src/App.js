import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
// Importamos la grilla de material UI design
import Grid from '@material-ui/core/Grid';

const cities = [
  'Rusia,urss',
  'Buenos Aires,ar',
  'Cancún,mex',
  'Rio de Janeiro,bra',
  'Ciudad de Panamá,pan'
];

class App extends Component {
  
  // Manejador de eventos
  handleLocationClick = city =>{
    console.log(`handleLocationClick:  ${city}`);
  }
  
  render() {
    return (
      <div className="App">

            <Grid container spacing={40} alignItems='center' alignContent='center' justify='space-between'>
                <Grid item md={4}>
                  <LocationList 
                     cities={cities} 
                     onSelectedLocation={this.handleLocationClick} />
                </Grid>
                <Grid item md={8}>
                    Forestcats component
                </Grid>                
            </Grid>
          
      </div>
    );
  }
}

export default App;
