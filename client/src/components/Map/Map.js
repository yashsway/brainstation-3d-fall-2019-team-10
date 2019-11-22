import React, { Component } from "react";
import Canada from "@svg-maps/canada";
import { RadioSVGMap } from "react-svg-map";

class Map extends Component {
  printLocation = loc => {
    console.log(loc.getAttribute("name"));
  };
  render() {
    return <RadioSVGMap map={Canada} onChange={this.printLocation} />;
  }
}
export default Map;