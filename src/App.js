import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="leftpanel">
            <LocationList />
          </div>
      </div>
    );
  }
}

export default App;
