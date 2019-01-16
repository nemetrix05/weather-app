import React from 'react';
import ReactDOM from 'react-dom';
// REDUX importamos la libreria React - Redux y encapsulamos la aplicacion en ese modulo. Luego le pasamos como prop el store
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// REDUX : Importamos el store
import { store } from './store';

// Con Provider se da el store a todos los componentes de la aplicacion
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
