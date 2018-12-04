// Conectamos con el api de clima
// Definimos las constantes con las variables para conectar con el api key

const location     = 'Bogota,col';
const api_key      = 'd2b2dbd137f5d1ec2fb1e7f4d25f04b7';
const url_base_api = 'http://api.openweathermap.org/data/2.5/weather';

// concatenamos todo la consulta en una constante para pasarla al metodo fecth
// Para que convierta la temperatura, usamos el parametro extra en la documentacion del api &units=metric

// o por medio de un plugin: npm install --save convert-units

export const api_weather = `${url_base_api}?q=${location}&appid=${api_key}`;