import React, { Component } from 'react';
// import logo from './logo.svg';
import GoogleMapReact from 'google-map-react';
// import ReactMapGL from 'react-map-gl';
import './App.css';
import Flat from './components/flat'
import Marker from './components/marker'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount() {
  const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      this.setState({
        flats: data
    })
  })
}



  render() {
    const center = {
      lat: 48.8566,
      lng: 2.3522
    }

    return (
      <div className="app">
      <div className="main">
        <div className="search">
        </div>
        <div className="flats">
          {this.state.flats.map((flat)  => {
            return <Flat key={flat.name} flat={flat} />
          })}
        </div>
      </div>
      <div className="map">
        <GoogleMapReact
          center = {center}
          zoom = {11} >
        {this.state.flats.map((flat)  => {
            return <Marker key={flat.name} lat={flat.lat} lng={flat.lng} text={flat.price} />
          })}
        </GoogleMapReact>
      </div>
    </div>
    );
  }
}

export default App;
