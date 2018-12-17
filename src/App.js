import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Bogotá,col',
  'Buenos Aires,ar',
  'Cancún,mex',
  'Rio de Janeiro,bra',
  'Ciudad de Panamá,pan'
];

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="leftpanel">
            <LocationList cities={cities}/>
          </div>
      </div>
    );
  }
}

export default App;
