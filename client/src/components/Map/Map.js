import React, { Component } from 'react'
import { RadioSVGMap } from "react-svg-map";
import Canada from "@svg-maps/canada";
import './map.scss'

export default class Map extends Component {
constructor(props) {
    super(props);

    this.state={
        toggle: false
    }

    // Create new map object
    this.customCanada = {
    ...Canada,
    label: 'Canada',
    locations: Canada.locations.map((location) => {
        return location
    })
    };
}

handleClick=(event)=>{
    event.preventDefault();
    this.setState({
        toggle: true
    })
}

render() {
    return (
    <div className='map-container' onClick={this.handleClick}>
        <RadioSVGMap map={this.customCanada} />
    </div>
    );
}
}











// import './map.scss'
// import Canada from "@svg-maps/canada";
// import { SVGMap } from "react-svg-map";
// import "react-svg-map/lib/index.css";


// export default class Map extends Component {
//         render() {
//             return <SVGMap map={Canada} className = 'svg-map' />;
//         }
//         }
