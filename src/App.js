import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat'

class App extends Component {
  render() {
    const flat = {
      "name": "Serene House Surrounded By Woodlands",
      "imageUrl": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wood-wrapped-rustic-living-room-1569465164.jpg",
      "price": 400,
      "priceCurrency": "$",
      "lat": 48.885707,
      "lng": 2.343543
    };
    return (
      <div>
        <Flat flat={flat} />
        <Flat flat={flat} />
      </div>
    );
  }
}

export default App;
