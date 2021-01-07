import React from "react";
import "./flat.css"

// const flat = {
//   name: "Serene Apartment Surrounded By Woodlands",
//   price: 100,
// }

// <Flat flat={flat}/>

class Flat extends React.Component {
  render() {

    const title= this.props.flat.name + ", Price per week: " + this.props.flat.priceCurrency +
    this.props.flat.price;

    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };
    return (
      <div className="flat">
        <div className="flat-picture" style={style}>

        </div>
        <div className="flat-title">
          {title}
        </div>
      </div>
    );
  }
}

export default Flat;
