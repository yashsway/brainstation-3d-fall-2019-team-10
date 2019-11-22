import React, { Component } from "react";
import Canada from "@svg-maps/canada";
import { RadioSVGMap } from "react-svg-map";
import './Map.scss';

class Map extends Component {
  printLocation = loc => {
    console.log(loc.getAttribute("name"));
  };
  render() {
    return (
      <>
        <div className="map__container">
          <RadioSVGMap map={Canada} onChange={this.printLocation} />
        </div>
      </>
    );
  }
}
export default Map;