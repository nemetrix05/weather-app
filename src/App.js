import React, { Component } from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocation';

class App extends Component {
  render() {
    return (
      <div className="App">
          <WeatherLocation city='Moscu,urss'/>
      </div>
    );
  }
}

export default App;
