import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/hello';

// const root = <div>
//   <Hello firstName="Sho" lastName ="Neriki" />
// </div>

mapboxgl.accessToken = 'pk.eyJ1IjoiaWtpcmVub2hzIiwiYSI6ImNrZ2x0eGRucDAydW8yd210NDZxYnNtamcifQ.3OUA266KEwYOCFhuXcGPpQ';

ReactDOM.render(<App />,document.getElementById('root'));

 // If you want to start measuring performance in your app, pass a function
 // to log results (for example: reportWebVitals(console.log))
 // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
